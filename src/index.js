import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9oJCYjIkxAZhTdR8HbsQdW0T2us5d9fA",
  authDomain: "mibasededatos-a6048.firebaseapp.com",
  projectId: "mibasededatos-a6048",
  storageBucket: "mibasededatos-a6048.appspot.com",
  messagingSenderId: "580294325251",
  appId: "1:580294325251:web:a7f9aca9d81da7ee8c4a36",
  measurementId: "G-KWRZEY455P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);









ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
