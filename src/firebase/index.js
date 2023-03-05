import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyAIgqthSNGOlUa1LM96crCVWWNjrT9baa0",
  authDomain: "node-manager-app.firebaseapp.com",
  projectId: "node-manager-app",
  storageBucket: "node-manager-app.appspot.com",
  messagingSenderId: "520600846441",
  appId: "1:520600846441:web:930ac89b6c963c084f62f8"
};

firebase.initializeApp(firebaseConfig)

export default firebase