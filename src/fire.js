// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyAKUQpC98v5hCh_Tk-_-1nou3gZNPlHKXA",
    authDomain: "pt-app-bd7e0.firebaseapp.com",
    databaseURL: "https://pt-app-bd7e0.firebaseio.com",
    projectId: "pt-app-bd7e0",
    storageBucket: "pt-app-bd7e0.appspot.com",
    messagingSenderId: "798354164227",
    appId: "1:798354164227:web:48de9b681bb4fa0ba39c36",
    measurementId: "G-HTCMMNXZ7P"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
//   firebase.analytics();