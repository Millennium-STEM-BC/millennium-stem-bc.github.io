let db = firebase.firestore();
let auth = firebase.auth();

// function switchBg(bg) {
//     var images = {
//         'bg1.jpg': 'Joshua Earle',
//         'bg2.jpg': 'Martin Jernberg',
//         'bg3.jpg': 'Juskteez Vu',
//         't1.png': 'Jason Leung',
//         't2.png': 'Pawel Czerwinski'
//     };

//     var randomImage = bg;
    
//     var body = document.getElementById('body');
//     body.style.backgroundImage = 'url(/assets/img/index/' + randomImage + ')';
// }

// document.addEventListener('DOMContentLoaded', function () {
//     switchBg('bg1.jpg')
// });

document.addEventListener('DOMContentLoaded', (event) => {
    // video observer
    const video = document.querySelector('video');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.muted = true;
                video.play()
            } else {
                video.pause()
            }
        });
    }, { threshold: 0.5 });
    observer.observe(video);

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