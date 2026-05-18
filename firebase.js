import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Cole aqui dentro as novas chaves que você copiou da tela do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBUoMcaE8rAKj_4IWjAL7iLhh1-6UM-hNc",
    authDomain: "corrida-c4784.firebaseapp.com",
    projectId: "corrida-c4784",
    storageBucket: "SEU_NOVO_STORAGE_BUCKET",
    messagingSenderId: "SEU_NOVO_MESSAGING_SENDER_ID",
    appId: "SEU_NOVO_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);