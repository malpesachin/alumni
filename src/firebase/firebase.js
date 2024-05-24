import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCuxCZnV64TO1eSqgGgFn7CpFy1kkDaBvA",
    authDomain: "career-loom.firebaseapp.com",
    projectId: "career-loom",
    storageBucket: "career-loom.appspot.com",
    messagingSenderId: "23632550774",
    appId: "1:23632550774:web:e8a61f56e1be60bdec3857",
    measurementId: "G-V89Q5JS4KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);