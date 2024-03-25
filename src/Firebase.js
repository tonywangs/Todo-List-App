import firebase from 'firebase' 

const firebaseConfig = {
  apiKey: "AIzaSyCioOUxyT35ZyBs1D7Uxpz67UdUVJxmDzo",
  authDomain: "todo-app-2b9b5.firebaseapp.com",
  projectId: "todo-app-2b9b5",
  storageBucket: "todo-app-2b9b5.appspot.com",
  messagingSenderId: "35348103331",
  appId: "1:35348103331:web:1016d94420d19a9c7b7f16",
  measurementId: "G-PZF8YSPTTQ"
};

firebase.initializeApp(firebaseConfig)
export default firebase