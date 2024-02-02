// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdwbX-g31ajbkgSrZsbcy9GZUN1zlcBgc",
  authDomain: "safer-webapp.firebaseapp.com",
  projectId: "safer-webapp",
  storageBucket: "safer-webapp.appspot.com",
  messagingSenderId: "824107826196",
  appId: "1:824107826196:web:6047be58a4bb98e5ee7b01",
  measurementId: "G-FX0WC5JZZ1"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Auth

export { app, analytics, auth };
