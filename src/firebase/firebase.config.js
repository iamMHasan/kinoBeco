// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: "AIzaSyAJFjKDoFjulWogq8IRDWffgUHKsnnsAyM",
// authDomain: "kinobeco.firebaseapp.com",
// projectId: "kinobeco",
// storageBucket: "kinobeco.appspot.com",
// messagingSenderId: "278080528059",
// appId: "1:278080528059:web:2984412025be5e4572939e",