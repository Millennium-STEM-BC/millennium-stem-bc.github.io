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
});