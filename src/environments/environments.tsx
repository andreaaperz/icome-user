import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBr0H5fa83YncVy01C6qT_ZAiZcZ9hSqsw",
    authDomain: "idecom-report.firebaseapp.com",
    projectId: "idecom-report",
    storageBucket: "idecom-report.appspot.com",
    messagingSenderId: "867915011110",
    appId: "1:867915011110:web:c4af4848308a9aa19e42e7"
};

const fire = firebase.initializeApp(config);
export default fire