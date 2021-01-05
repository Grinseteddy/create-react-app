import('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
import('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// eslint-disable-next-line no-undef
firebase.initializeApp({
    messagingSenderId: "236592691654",
    projectId: "projectforwebnotifications",
    apiKey: "AAAANxYF-cY:APA91bHDi9By8eeWWNJOCz4Eug-OCThXgcZ5014hxS5OhAKgWgp1Q2NsZF5LIQL-jHdZny7MwSN7B2T1qzp-3QsqIqHyg6LhB4qNeyhGwWyzdPI7lMDBe9Klfrgl2pkVc0Cym2oJF0hq",
    appId: "projectforwebnotifications"
});

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
