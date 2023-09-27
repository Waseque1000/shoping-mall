// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_CgWVN-MMzUQhlKJ5wHTqNZ6z6UORLqg",
  authDomain: "shoping-mall-66243.firebaseapp.com",
  projectId: "shoping-mall-66243",
  storageBucket: "shoping-mall-66243.appspot.com",
  messagingSenderId: "186177944494",
  appId: "1:186177944494:web:6bf4555418f33b353f663f",
  measurementId: "G-VNTFY5S232",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
