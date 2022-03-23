import firebase from "firebase";
 
const firebaseConfig = {
  apiKey: "AIzaSyCToCqziESuG6wHk4tKghC2vpt381-HIr4",
  authDomain: "schoolattendanceapp-deb45.firebaseapp.com",
  databaseURL: "https://schoolattendanceapp-deb45-default-rtdb.firebaseio.com",
  projectId: "schoolattendanceapp-deb45",
  storageBucket: "schoolattendanceapp-deb45.appspot.com",
  messagingSenderId: "695848334637",
  appId: "1:695848334637:web:d9eda6f4f51262a7a78fa4",
  measurementId: "G-GBDL3NDF56"
};

 firebase.initializeApp(firebaseConfig)

  export default firebase.database()
 

  