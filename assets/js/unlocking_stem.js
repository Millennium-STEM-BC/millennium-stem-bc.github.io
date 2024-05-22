let db = firebase.firestore();
let auth = firebase.auth();

document.addEventListener('DOMContentLoaded', (event) => {
    // newsletter observer
    const emailInput = document.getElementById('email-address');
    emailInput.addEventListener('keypress', function(e) {
        if (e.key == 'Enter') {
            e.preventDefault();
            subscribeNewsletter();
        }
    })
});

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
        alert('Thank you for subscribing to our newsletter');
    }).catch((error) => {
        alert('Error subscribing to newsletter. Please try again later.');
    });
}