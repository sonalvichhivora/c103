//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAb_QOqlPjAAkGdXnOl1kGIovpUf-Um8bI",
      authDomain: "kwitter-90e55.firebaseapp.com",
      databaseURL: "https://kwitter-90e55-default-rtdb.firebaseio.com",
      projectId: "kwitter-90e55",
      storageBucket: "kwitter-90e55.appspot.com",
      messagingSenderId: "832585252666",
      appId: "1:832585252666:web:10622c84bf3fba08545a03"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}