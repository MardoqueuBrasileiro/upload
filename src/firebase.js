import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCuCOZzhbyhfa7G3trTgAEyUHDAkftl_4w",
  authDomain: "meblink-62841.firebaseapp.com",
  projectId: "meblink-62841",
  storageBucket: "meblink-62841.appspot.com",
  messagingSenderId: "208607014276",
  appId: "1:208607014276:web:3c1d11d1cb5a96449601d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
