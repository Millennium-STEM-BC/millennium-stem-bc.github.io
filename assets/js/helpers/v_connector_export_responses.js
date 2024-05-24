let db = firebase.firestore();

async function fetchResponses() {
    try {
        const response = await db.collection('V_Connector_Contribute_Responses').get();
        const csvHeaders = ['url', 'firstname', 'lastname', 'email', 'organization', 'title', 'status', 'type', 'description', 'street', 'city', 'province', 'postal_code'];
        let csvContent = csvHeaders.join(',') + '\n';

        response.forEach(doc => {
            const data = doc.data();
            const row = [
                data.url || '',
                data.firstname || '',
                data.lastname || '',
                data.email || '',
                data.organization || '',
                data.title || '',
                data.status || '',
                data.type || '',
                data.description || '',
                data.street || '',
                data.city || '',
                data.province || '',
                data.postal_code || ''
            ].map(field => `"${field}"`).join(',');

            csvContent += row + '\n';
        });

        return csvContent;
    } catch (error) {
        console.error("Error fetching data from Firestore:", error);
    }
}

function downloadResponses(content, name) {
    const blob = new Blob([content], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${name}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.onload = async () => {
    const csvContent = await fetchResponses();
    downloadResponses(csvContent, 'responses');
}