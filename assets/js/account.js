let db = firebase.firestore();
let auth = firebase.auth();
var url = new URL(window.location.href);
var searchParams = new URLSearchParams(url.search);
var redirectURL = searchParams.get('redirect');

function signin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            if (redirectURL != null) { window.location = redirectURL; } else { window.location = '/index.html'; }
        })
        .catch((error) => {
            console.log(error.code)
            if (error.code === 'auth/user-not-found') {
                alert('No user found associated with this email. Please check your email address or create a new account.');
                console.error('No user found with this email.', error);
            } else if (error.code === 'auth/wrong-password' || error.message.includes('INVALID_LOGIN_CREDENTIALS')) {
                alert('Incorrect credencials. Please try again.');
            } else {
                alert(error);
                console.error(error);
            }
        })
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCred) => {
            const user = userCred.user;

            user.sendEmailVerification()
                .then(() => {
                    db.collection('Users').doc(userCred.user.uid).set({
                        email: email,
                        uid: userCred.user.uid,
                        isAdmin: false,
                        createdOn: firebase.firestore.FieldValue.serverTimestamp()
                    })
                        .then(() => {
                            alert('An verification link has been sent to your email. Please check your inbox to verify your account.');
                            if (redirectURL != null) { window.location = redirectURL; } else { window.location = '/index.html'; }
                        })
                        .catch((error) => {
                            console.error(error);
                        })
                })
        })
}

function signout() {
    auth.signOut()
        .then(() => {
            window.location = '/index.html';
        })
}

function redirectCreateAccount() {
    if (redirectURL != null) {
        window.location = '/signup.html?redirect=' + redirectURL;
    } else {
        window.location = '/signup.html';
    }
}

function redirectSignin() {
    if (redirectURL != null) {
        window.location = '/signin.html?redirect=' + redirectURL;
    } else {
        window.location = '/signin.html';
    }
}