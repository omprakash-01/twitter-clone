import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB7o0oTtcddYbFbOGDHSrN_8_sF2L0ZDGc",
    authDomain: "fir-twitter-clone-fa470.firebaseapp.com",
    projectId: "fir-twitter-clone-fa470",
    storageBucket: "fir-twitter-clone-fa470.appspot.com",
    messagingSenderId: "406426731150",
    appId: "1:406426731150:web:adb34a2217bd7fa7f37fdf",
    measurementId: "G-9F9X6T6QHV"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);