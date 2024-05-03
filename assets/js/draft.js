let db = firebase.firestore();
let auth = firebase.auth();

function switchBg(bg) {
    var images = {
        'bg1.jpg': 'Joshua Earle',
        'bg2.jpg': 'Martin Jernberg',
        'bg3.jpg': 'Juskteez Vu',
        't1.png': 'Jason Leung',
        't2.png': 'Pawel Czerwinski'
    };

    var randomImage = bg;
    
    var body = document.getElementById('body');
    body.style.backgroundImage = 'url(/assets/img/index/' + randomImage + ')';
}

document.addEventListener('DOMContentLoaded', function () {
    switchBg('bg1.jpg')
});