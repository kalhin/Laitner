import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMRllQTG84kkYy-1VVn7Xy76uCfxavJFg",
  authDomain: "laither.firebaseapp.com",
  databaseURL: "https://laither.firebaseio.com",
  projectId: "laither",
  storageBucket: "laither.appspot.com",
  messagingSenderId: "314260058695",
  appId: "1:314260058695:web:dbed6c2f63e150b0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp.firestore())

// // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();
// console.log(storage);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
