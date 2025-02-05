import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyA5NakSZglcB646CE3OwakD1e1vGx7aTOU",
    authDomain: "contactform-2e37b.firebaseapp.com",
    databaseURL: "https://contactform-2e37b-default-rtdb.firebaseio.com",
    projectId: "contactform-2e37b",
    storageBucket: "contactform-2e37b.firebasestorage.app",
    messagingSenderId: "964120235732",
    appId: "1:964120235732:web:76cfe5e14ea4dcbf70f541"
});
const auth = getAuth(firebaseApp);

onAuthStateChanged (auth, user => {
    if (user != null){
        console.log('logado');
    } else {
        console.log('nenhum usuario logado');
    }
})