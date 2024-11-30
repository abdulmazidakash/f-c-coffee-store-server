// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-b8B5LDF0wV_PU0LRcfnA_zjdos6ISDU",
  authDomain: "coffee-store-23.firebaseapp.com",
  projectId: "coffee-store-23",
  storageBucket: "coffee-store-23.firebasestorage.app",
  messagingSenderId: "538906338354",
  appId: "1:538906338354:web:ae18ac502b2fa967e1c82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

/**
 * 1. firebase-tools (one-time)
 * 2. firebase login (one-time)
 * 3. one time for each project: firebase init
 * 4. what you want to do: select hosting
 * 5. select a project (already have one created in firebase console)
 * 6. what will be your public -----dist
 * 7. single page?: y
 * 
 * ----------------
 * #### Each time you want to deploy
 *  8. npm run build
 *  9. firebase deploy
 */