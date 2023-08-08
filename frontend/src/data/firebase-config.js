import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkDGx2wv1isrCEulIzE9XTTn_FZXdP9T0",
  authDomain: "portefolio-f09d6.firebaseapp.com",
  projectId: "portefolio-f09d6",
  storageBucket: "portefolio-f09d6.appspot.com",
  messagingSenderId: "873249837717",
  appId: "1:873249837717:web:0627966f881e32f8f5819c",
  measurementId: "G-WQB8X39B2G"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;