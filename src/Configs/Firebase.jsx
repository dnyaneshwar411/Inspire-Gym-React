import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCZtRFfGXEld7ILPy5kAp8eifslPxAU61E",
    authDomain: "inspire-6d54d.firebaseapp.com",
    projectId: "inspire-6d54d",
    storageBucket: "inspire-6d54d.appspot.com",
    messagingSenderId: "1070609544896",
    appId: "1:1070609544896:web:3a657900902b99a47f5f25",
    measurementId: "G-S00T62R710"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);