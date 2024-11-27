const firebaseConfig = {
    apiKey: "AIzaSyAjBiPfqc5yG0dgD9VSXS61_seismsMCPo",
    authDomain: "proiectbeutesting.firebaseapp.com",
    databaseURL: "https://proiectbeutesting-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "proiectbeutesting",
    storageBucket: "proiectbeutesting.firebasestorage.app",
    messagingSenderId: "662539129588",
    appId: "1:662539129588:web:df05b971fa5b7010fec4a1",
    measurementId: "G-7FT2X97P6Q"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();