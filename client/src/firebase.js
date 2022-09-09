import { initializeApp } from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBFC8q0C3_gLT9srWGwX4A2sxeLJ7Tj38A",
  authDomain: "terra-food-82cf2.firebaseapp.com",
  projectId: "terra-food-82cf2",
  storageBucket: "terra-food-82cf2.appspot.com",
  messagingSenderId: "857806844290",
  appId: "1:857806844290:web:27bc7fbe18f8698c80df9b",
  measurementId: "G-Z86M787BJ7"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;

// import firebase from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyBFC8q0C3_gLT9srWGwX4A2sxeLJ7Tj38A",
//     authDomain: "terra-food-82cf2.firebaseapp.com",
//     projectId: "terra-food-82cf2",
//     storageBucket: "terra-food-82cf2.appspot.com",
//     messagingSenderId: "857806844290",
//     appId: "1:857806844290:web:27bc7fbe18f8698c80df9b",
//     measurementId: "G-Z86M787BJ7"
//   };

// firebase.initializeApp(firebaseConfig);
// var storage = firebase.storage();
// export default storage;