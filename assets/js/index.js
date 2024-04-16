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

    var aTag = citation.querySelector('a');
    aTag.style.color = 'gray';
    aTag.style.transition = 'color 0.3s';
    aTag.addEventListener('mouseover', function () {
        aTag.style.color = 'white';
    });
    aTag.addEventListener('mouseout', function () {
        aTag.style.color = 'gray';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    firebase.auth().onAuthStateChanged(function (user) {
        const accountManagementLink = document.getElementById('accountMgnLink');
        const accountManagementText = document.getElementById('accountMgnText');
        const join_link = document.getElementById('join-link');

        if (user) {
            const userRef = db.collection('Users').doc(user.uid);
            const lastActive = firebase.firestore.FieldValue.serverTimestamp()
            userRef.set({
                lastActive: lastActive
            }, { merge: true });

            userRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    switchBg(data.bg)
                } else {
                    console.log("No such user.");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

            accountManagementLink.onclick = function () { firebase.auth().signOut() }
            accountManagementText.innerText = 'Log Out';

            join_link.innerHTML = 'Chat Now';
            join_link.onclick = function () { window.location = '/chat.html' };
        } else {
            switchBg('bg1.jpg')
            accountManagementLink.onclick = function () { window.location = '/signin.html?redirect=/index.html' }
            accountManagementText.innerText = 'Log in';

            join_link.innerHTML = 'View our missions';
            join_link.onclick = function () { window.location = '/about.html' };
        }
    });
});