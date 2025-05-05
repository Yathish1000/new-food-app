import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyASI31tHJRgELxLttCIQpOMa5ygq_ImT6s",
  authDomain: "foodapp-f2b9b.firebaseapp.com",
  projectId: "foodapp-f2b9b",
  storageBucket: "foodapp-f2b9b.firebasestorage.app",
  messagingSenderId: "790690538912",
  appId: "1:790690538912:web:f1bce5e18c3128f98eb0c5",
  measurementId: "G-E428SVX1WB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const Auth =  getAuth(app)
export const DataBase=getDatabase(app)