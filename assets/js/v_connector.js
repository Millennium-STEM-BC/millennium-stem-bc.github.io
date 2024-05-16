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
                        div.innerHTML += createOpportunityCard(data.title, data.organization, data.status, data.url);
                    });
                })
                .catch((error) => {
                    console.error("Error getting documents: ", error);
                });
        });
    }
}

function add(title, organization, description, status, url) {
    const titleWords = title.toLowerCase().split(' ');
    const organizationWords = organization.toLowerCase().split(' ');

    db.collection('V_Connector').add({
        title: title,
        titleWords: titleWords,
        organization: organization,
        organizationWords: organizationWords,
        description: description,
        status: status,
        url: url
    })
}

function createOpportunityCard(title, organization, status, url) {
    return `
        <div class="bg-white shadow rounded-lg p-4 mb-4 flex justify-between items-center hover:scale-105 transition-transform duration-200">
            <div>
                <h3 class="text-lg font-bold">${title}</h3>
                <p class="text-gray-600 font-semibold">${organization}</p>
                <span class="text-green-600">${status}</span>
            </div>
            <a href="${url}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200">View</a>
        </div>
    `;
}

function loadOpportunityCards() {
    div = document.getElementById('opportunity-cards');

    db.collection('V_Connector').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                div.innerHTML += createOpportunityCard(data.title, data.organization, data.status, data.url);
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
    const lines = text.split('\n');
    const headers = lines[0].split(',');

    lines.slice(1).forEach(line => {
        const data = line.split(',');
        const docData = {};

        headers.forEach((header, index) => {
            docData[header.trim()] = data[index].trim();
        });

        db.collection('V_Connector').add(docData)
            .then(() => {
                console.log('Document successfully written!');
            })
            .catch(error => console.error('Error writing document: ', error));
    });
}


document.addEventListener('DOMContentLoaded', function () {
    loadOpportunityCards();
    document.getElementById('searchbar').addEventListener('input', search)
});