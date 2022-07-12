import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAj4TWSKWZnlH3WRE6F-wq59xhWYWIW6s",
  authDomain: "uk-domofond.firebaseapp.com",
  projectId: "uk-domofond",
  storageBucket: "uk-domofond.appspot.com",
  messagingSenderId: "1012449446835",
  appId: "1:1012449446835:web:d2839d728e18ea0337d9c6",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

export default storage;
