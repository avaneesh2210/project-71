var firebaseConfig = {
    apiKey: "AIzaSyBmhrlX6W1cH8jFkEwx8IxyqKSFPGB9LuE",
    authDomain: "lets-chat-f0699.firebaseapp.com",
    databaseURL: "https://lets-chat-f0699-default-rtdb.firebaseio.com",
    projectId: "lets-chat-f0699",
    storageBucket: "lets-chat-f0699.appspot.com",
    messagingSenderId: "110087400479",
    appId: "1:110087400479:web:16a21ad927872b6d42f92a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}