import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZKytcayPyHt4wEBp8JOfTWL9s4g-2YI0",
    authDomain: "practiceluci.firebaseapp.com",
    projectId: "practiceluci",
    storageBucket: "practiceluci.appspot.com",
    messagingSenderId: "388284793688",
    appId: "1:388284793688:web:038b91cbf24cd14ec75b2d",
    measurementId: "G-TN4WV76SJ3"
  };

  const app = initializeApp(firebaseConfig);


// This grabs the input from the text boxes and prints them to console
function testFunction() {
    var nameInput = document.getElementById('name');
    var pwInput = document.getElementById('password');

    document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(nameInput.value);    
    console.log(pwInput.value);
});
}

function submitToFirebase() {
    
    document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log("123");    
});
}