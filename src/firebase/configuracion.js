import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCwvH9XNNawQw2sngtYLvX4wobwP2y1P2g",
  authDomain: "maxis-db.firebaseapp.com",
  projectId: "maxis-db",
  storageBucket: "maxis-db.firebasestorage.app",
  messagingSenderId: "577153994385",
  appId: "1:577153994385:web:4a531061c3d93f92d67930"
} 

export const app = initializeApp(firebaseConfig)