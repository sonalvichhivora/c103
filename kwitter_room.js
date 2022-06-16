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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

     console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById ("output").innerHTML+= row;
      
      //End code

      });});}
getData();
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }

 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html";
 }