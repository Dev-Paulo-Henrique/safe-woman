import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyBl_xXu8vkF_z_Qs1pTYCAcOYUE2z_RO88",
authDomain: "safewoman22.firebaseapp.com",
databaseURL: "https://safewoman22-default-rtdb.firebaseio.com",
projectId: "safewoman22",
storageBucket: "safewoman22.appspot.com",
messagingSenderId: "880829612224",
appId: "1:880829612224:web:731b048d16e8c787da6d25",
measurementId: "G-R9NTPGP9KC"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app)


export { database, auth };