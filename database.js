const firebaseConfig = {
    apiKey: "AIzaSyDjvkr_SZlwFOhob4uV97hsfAPj4sm_zbQ",
    authDomain: "database-9b7c0.firebaseapp.com",
    databaseURL: "https://database-9b7c0-default-rtdb.firebaseio.com",
    projectId: "database-9b7c0",
    storageBucket: "database-9b7c0.appspot.com",
    messagingSenderId: "917299733870",
    appId: "1:917299733870:web:0a989b6e286db9d65b0d7f",
    measurementId: "G-LQ31Y3K4Y1"
  };
//initialize firebase
  firebase.initializeApp(firebaseConfig);

//reference your database
var databaseDB = firebase.database().ref('database');

document.getElementById('Form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('username');
    var emailid = getElementVal('email');
    
    save(name,emailid);
}
    const save = (name,emailid) =>{
        var newForm = databaseDB.push();

        newForm.set({
            name: name,
            emailid: emailid,
        })
        .then(() => {
            console.log('Data saved successfully!');

            // Show success notify
        document.getElementById('notification').style.display = 'block';

        // Hide notify after 3 seconds
        setTimeout(() => {
            document.getElementById('notification').style.display = 'none';
        }, 3000);
    })
        
        .catch((error) => {
            console.error('Error saving data:', error);
            
        });
    }; 

    const getElementVal =(id) => {
    return document.getElementById(id).value;
}