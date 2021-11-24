function logout() {
   logout = document.getElementById("logout").value;
   localStorage.setItem("username", username);
   window.location = "index.html";
}


const firebaseConfig = {
    apiKey: "AIzaSyDAktF0tIYOUjRlJfeIVIHkB5LPE5-b0Vk",
    authDomain: "lets-chat-3a9a5.firebaseapp.com",
    databaseURL: "https://lets-chat-3a9a5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-3a9a5",
    storageBucket: "lets-chat-3a9a5.appspot.com",
    messagingSenderId: "81759109961",
    appId: "1:81759109961:web:deb064928ef6fdbb075098"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);