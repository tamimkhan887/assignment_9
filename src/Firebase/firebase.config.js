import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBkZpEAp6NbjRqPdwF3EKC75SFw6OCzk4I",
  authDomain: "assignment-9-d842d.firebaseapp.com",
  projectId: "assignment-9-d842d",
  storageBucket: "assignment-9-d842d.firebasestorage.app",
  messagingSenderId: "234743348826",
  appId: "1:234743348826:web:d8244e0051ef80e997a263"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;