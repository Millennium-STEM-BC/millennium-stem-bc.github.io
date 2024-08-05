let db = firebase.firestore();
let auth = firebase.auth();
let text = null;
let storage = firebase.storage();

function search() {
    const term = document.getElementById('searchbar').value.toLowerCase();
    const div = document.getElementById('opportunity-cards');
    div.innerHTML = '';

    if (term === '') {
        loadOpportunityCards();
    } else {
        db.collection('V_Connector')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const title = data.title.toLowerCase();
                    const organization = data.organization.toLowerCase();
                    const location = data.location.toLowerCase();

                    if (title.includes(term) || organization.includes(term) || location.includes(term)) {
                        div.innerHTML += createOpportunityCard(data.title, data.organization, data.description, data.url, data.type, data.location, data.status, data.notes);
                    }
                });
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
            });
    }
}


function add(title, organization, description, url, type, location, status, notes) {
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
        status: status,
        notes: notes
    })
}

function createOpportunityCard(title, organization, description, url, type, location, status, notes) {
    let notesTag = '';
    if (notes !== 'N/A') {
        notesTag = `<span class="mx-2 my-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/10">${notes}</span>`;
    }
    
    return `
        <div class="bg-white shadow rounded-lg p-4 mb-4 flex justify-between items-center hover:scale-105 transition-transform duration-200">
            <div>
                <h3 class="text-lg font-bold">${title}</h3>
                <p class="text-gray-600 font-semibold">${organization}</p>
                <p class="text-gray-600 my-2 mr-16">${description}</p>
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">${type}</span><span class="mx-2 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">${status}</span><button onclick="if ('${location}' != 'N/A') window.location = 'https://maps.google.com?q=${location}';"><span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">${location}</span></button>${notesTag}
            </div>

            <span class="sm:ml-3">
                <button onclick="window.location='${url}'" type="button" class="inline-flex items-center rounded-md bg-indigo-600 mr-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              
                    View
                </button>
            </span>
        </div>
    `;
}

function triggerFilter(id) {
    // change button opacity
    document.getElementById(id).classList.toggle('opacity-50');
    const div = document.getElementById('opportunity-cards');
    div.innerHTML = '';

    if (id == 'status') {
        if (document.getElementById(id).classList.contains('opacity-50')) {
            loadOpportunityCards();
        } else {
            db.collection('V_Connector').where('status', '==', 'Active').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    div.innerHTML += createOpportunityCard(data.title, data.organization, data.description, data.url, data.type, data.location, data.status, data.notes);
                })
            })
        }
    } else if (id == 'location') {
        if (document.getElementById(id).classList.contains('opacity-50')) {
            loadOpportunityCards();
        } else {
            db.collection('V_Connector').where('location', '!=', 'N/A').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    div.innerHTML += createOpportunityCard(data.title, data.organization, data.description, data.url, data.type, data.location, data.status, data.notes);
                })
            })
        }
    } else if (id == 'in person') {
        if (document.getElementById(id).classList.contains('opacity-50')) {
            loadOpportunityCards();
        } else {
            db.collection('V_Connector').where('type', '==', 'In Person').get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        div.innerHTML += createOpportunityCard(data.title, data.organization, data.description, data.url, data.type, data.location, data.status, data.notes);
                    })
                })
        }
    }
}

function loadOpportunityCards() {
    div = document.getElementById('opportunity-cards');

    db.collection('V_Connector').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                div.innerHTML += createOpportunityCard(data.title, data.organization, data.description, data.url, data.type, data.location, data.status, data.notes);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

document.getElementById('csvForm').addEventListener('submit', function (e) {
    const extracurricular_form = document.getElementById('promote-extra-curricular');
    e.preventDefault();

    const file = document.getElementById('csvFile').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            extracurricular_form.style.display = 'block';
            smoothScrollAboveElement('promote-extra-curricular', 30);
            
            document.getElementById('submit-extra-curricular').addEventListener('click', function() {
                uploadToStorage(file, text);
                alert('Your CSV file has been successfully uploaded. We will review your submission shortly.');
            });
        };
        reader.readAsText(file);
    } else {
        alert('Please upload an CSV file.');
    }
});

function processExtraCurricularForm(file, text, downloadURL) {
    const website = document.getElementById('organization-website').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const organization_name = document.getElementById('organization-name').value;
    const program_name = document.getElementById('program-name').value;
    const status = document.getElementById('status-select').value;
    const type = document.getElementById('type-select').value;
    const about = document.getElementById('about').value;

    const street = document.getElementById('street-address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('region').value;
    const postal_code = document.getElementById('postal-code').value;

    if (website && firstname && lastname && email && organization_name && program_name && status && type && about) {
        if (type === 'In Person') {
            db.collection('V_Connector_Contribute_Responses').add({
                url: website,
                firstname: firstname,
                lastname: lastname,
                email: email,
                organization: organization_name,
                title: program_name,
                status: status,
                type: type,
                description: about,
                street: street,
                city: city,
                province: province,
                postal_code: postal_code,
                csvURL: downloadURL
            })
            .then(() => {
                processCSV(text)
                alert('Thank you for your submission! We will review it shortly.');
            })
        } else {
            db.collection('V_Connector_Contribute_Responses').add({
                url: website,
                firstname: firstname,
                lastname: lastname,
                email: email,
                organization: organization_name,
                title: program_name,
                status: status,
                type: type,
                description: about,
                street: "N/A",
                city: "N/A",
                province: "N/A",
                postal_code: "N/A",
                csvURL: downloadURL
            })
            .then(() => {
                processCSV(text)
                alert('Thank you for your submission! We will review it shortly.');
            })
        }
    } else {
        alert('Please fill out all fields.')
    }
}

function uploadToStorage(file, text) {
    if (file) {
        const storageRef = storage.ref(`/V_Connector_Contribute_Responses/${file.name}`);
        const uploadTask = storageRef.put(file);

        uploadTask.on('stage_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, (error) => {
            console.error('Error uploading file: ', error);
        }, async () => {
            const downloadURL = await storageRef.getDownloadURL();
            processExtraCurricularForm(file, text, downloadURL);
        })
    }
}

function processCSV(text) {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    const headers = lines[0].split(',').map(header => header.trim());

    lines.slice(1).forEach(line => {
        const data = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g).map(field => field.trim());

        if (data.length === headers.length) {
            const docData = {};

            headers.forEach((header, index) => {
                let value = data[index];
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

document.getElementById('type-select').addEventListener('change', function() {
    var addressField = document.getElementById('organization-address-field');
    if (this.value === 'In Person') {
        addressField.style.display = 'block';
    } else {
        addressField.style.display = 'none';
    }
})

function smoothScrollAboveElement(elementId, offset) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        window.scrollTo({
            top: elementTop - offset,
            behavior: 'smooth'
        });
    }
}

function exportResponses() {
    const redirect = '/helpers/v_connector_export_responses.html';

    auth.onAuthStateChanged((user) => {
        if (user) {
            window.location = redirect;
        } else {
            window.location = `/signin.html?redirect=${redirect}`;
        }
    })
}

// added search delay to prevent too many requests
document.addEventListener('DOMContentLoaded', function() {
    loadOpportunityCards();
    let searchTimeout;
    document.getElementById('searchbar').addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(search, 300);
    })
})

function subscribeNewsletter() {
    const email = document.getElementById('email-address').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !email) {
        alert('Please enter a valid email address');
        return;
    }

    db.collection('newsletter').add({
        email: email
    }).then(() => {
        document.getElementById('email-address').value = '';
        
        window.location = `https://docs.google.com/forms/d/e/1FAIpQLSeEX67dCl21tveki2OioAXVolss3MOfOm2JdJUkwXoTUe0UzQ/viewform?usp=pp_url&entry.829953346=${email}`;
    }).catch((error) => {
        alert('Error subscribing to newsletter. Please try again later.');
    });
}