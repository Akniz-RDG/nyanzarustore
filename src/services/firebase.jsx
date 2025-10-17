// src/services/firebase.js

// Importa las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8oWqlS7-H4bqzZSYSaTtjDI5mkZwdj5A",
  authDomain: "coder-flex-nyanzarustore.firebaseapp.com",
  projectId: "coder-flex-nyanzarustore",
  storageBucket: "coder-flex-nyanzarustore.firebasestorage.app",
  messagingSenderId: "238476658141",
  appId: "1:238476658141:web:ba13da53d2c312966e2234"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la base de datos para usarla en otros archivos
export const db = getFirestore(app);