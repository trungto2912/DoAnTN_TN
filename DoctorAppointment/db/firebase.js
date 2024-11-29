import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCXeXWOax-Axd42keZfeJEN99Q7gecP1lE",
    authDomain: "restaurantbookingapp-8218c.firebaseapp.com",
    projectId: "restaurantbookingapp-8218c",
    storageBucket: "restaurantbookingapp-8218c.appspot.com",
    messagingSenderId: "649846786882",
    appId: "1:649846786882:web:581c2ee819b8c4ab2596db",
    measurementId: "G-EZV1M5LGSB"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;