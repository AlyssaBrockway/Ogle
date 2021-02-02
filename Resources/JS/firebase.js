var firebaseConfig = {
    apiKey: "AIzaSyAFtLYZ_Kbg8My7RC-CgaZEsXohl4cZ4cM",
    authDomain: "ogle-data.firebaseapp.com",
    databaseURL: "https://ogle-data.firebaseio.com",
    projectId: "ogle-data",
    storageBucket: "ogle-data.appspot.com",
    messagingSenderId: "574554470490",
    appId: "1:574554470490:web:33f085d94333f01e99c063",
    measurementId: "G-LC58VHCHKQ",
};
firebase.initializeApp(firebaseConfig);
auth = firebase.auth();
db = firebase.firestore();
storage = firebase.storage();
