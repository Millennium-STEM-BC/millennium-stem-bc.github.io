let db = firebase.firestore();

function search() {
    const term = document.getElementById('searchbar').value.toLowerCase();
    const div = document.getElementById('opportunity-cards');
    div.innerHTML = ''; // Clear the current cards

    if (term === '') {
        // If the search bar is empty, load all the opportunity cards
        loadOpportunityCards();
    } else {
        // Otherwise, load only the cards that match the search term
        ['titleWords', 'organizationWords'].forEach(field => {
            db.collection('V_Connector')
                .where(field, 'array-contains', term)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        div.innerHTML += createOpportunityCard(data.title, data.organization, data.description, data.url, data.type, data.location, data.status);
                    });
                })
                .catch((error) => {
                    console.error("Error getting documents: ", error);
                });
        });
    }
}

function add(title, organization, description, url, type, location, status) {
    const titleWords = title.toLowerCase().split(' ');
    const organizationWords = organization.toLowerCase().split(' ');

    db.collection('V_Connector').add({
        title: title,
        titleWords: titleWords,
        organization: organization,
        organizationWords: organizationWords,
        description: description,
        url: url,
        type: type,
        location: location,
        status: status
    })
}

function createOpportunityCard(title, organization, description, url, type, location, status) {
    return `
        <div class="bg-white shadow rounded-lg p-4 mb-4 flex justify-between items-center hover:scale-105 transition-transform duration-200">
            <div>
                <h3 class="text-lg font-bold">${title}</h3>
                <p class="text-gray-600 font-semibold">${organization}</p>
                <p class="text-gray-600 my-2 mr-16">${description}</p>
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">${type}</span><span class="mx-2 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">${status}</span><span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">${location}</span>
            </div>

            <span class="sm:ml-3">
                <button onclick="window.location='${url}'" type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              
                    View
                </button>
            </span>
        </div>
    `;
}

function loadOpportunityCards() {
    div = document.getElementById('opportunity-cards');

    db.collection('V_Connector').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                div.innerHTML += createOpportunityCard(data.title, data.organization, data.description, data.url, data.type, data.location, data.status);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

document.getElementById('csvForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const file = document.getElementById('csvFile').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            processCSV(text);
        };
        reader.readAsText(file);
    }
});

function processCSV(text) {
    // Split the text into lines and remove any leading/trailing whitespace
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    // Split the first line into headers
    const headers = lines[0].split(',').map(header => header.trim());

    lines.slice(1).forEach(line => {
        // Use a regular expression to handle commas within quoted fields correctly
        const data = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g).map(field => field.trim());

        if (data.length === headers.length) {
            const docData = {};

            headers.forEach((header, index) => {
                let value = data[index];
                // Remove any leading and trailing quotation marks from the description field
                if (header === 'description') {
                    value = value.replace(/^"+|"+$/g, '');
                }
                if (header === 'url' && !/^https?:\/\/.+$/.test(value)) {
                    value = 'N/A';
                }
                if (header === 'location' && !/^[a-zA-Z0-9\s,]+$/.test(value)) {
                    value = 'N/A';
                }
                docData[header] = value;
            });

            db.collection('V_Connector').add(docData)
                .then(() => {
                    console.log('Document successfully written!');
                })
                .catch(error => console.error('Error writing document: ', error));
        } else {
            console.warn('Data length mismatch, skipping line:', line);
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    loadOpportunityCards();
    document.getElementById('searchbar').addEventListener('input', search)
});