var firebaseConfig = {
  apiKey: "AIzaSyC1PM-WQk6N7Km6CUkzDM6h_VD6lW9A8Gk",
  authDomain: "kwitter-app-acc97.firebaseapp.com",
  databaseURL: "https://kwitter-app-acc97-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-acc97",
  storageBucket: "kwitter-app-acc97.appspot.com",
  messagingSenderId: "1056248339032",
  appId: "1:1056248339032:web:6b9b5234fcebefa63d082d",
  measurementId: "G-FWFDT1W4FC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


