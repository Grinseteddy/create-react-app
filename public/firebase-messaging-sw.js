//import firebase from "firebase/app";
//import firebase from "firebase/messaging"

importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// eslint-disable-next-line no-undef
firebase.initializeApp({
    "messagingSenderId": "236592691654",
    "projectId": "projectforwebnotifications",
    "apiKey": "AAAANxYF-cY:APA91bFupw59Qn6e9G8ocGJloc_1Sc3_9GZnqsXNlyi-AyZvC7678Ppw8syBIWz255-IQYvR9rWLcerakND8F2dx-C6KYHcosP_m91X_DD0qcEd-e_19fImv-xx6XgmUoHEbTkp-bnar",
    "appId": "projectforwebnotifications"
});

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
