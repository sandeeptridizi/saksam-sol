import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  remove,
  update,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTrW9Vw7xCuxm0iaNPisLOLUF46_gJXf0",
  authDomain: "Saksam-sol.firebaseapp.com",
  projectId: "Saksam-sol",
  databaseURL: "https://Saksam-sol-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "Saksam-sol.firebasestorage.app",
  messagingSenderId: "395312148433",
  appId: "1:395312148433:web:389f76cce158ad6d533af0",
  measurementId: "G-TTLQ5DSDMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {
  database,
  storage,
  auth,
  ref,
  set,
  push,
  get,
  remove,
  update,
  storageRef,
  uploadBytes,
  getDownloadURL,
};
