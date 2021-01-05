import firebase from "firebase";

export const initializeFirebase = () => {

    firebase.initializeApp({
        messagingSenderId: "236592691654",
        projectId: "projectforwebnotifications",
        apiKey: "AAAANxYF-cY:APA91bHDi9By8eeWWNJOCz4Eug-OCThXgcZ5014hxS5OhAKgWgp1Q2NsZF5LIQL-jHdZny7MwSN7B2T1qzp-3QsqIqHyg6LhB4qNeyhGwWyzdPI7lMDBe9Klfrgl2pkVc0Cym2oJF0hq",
        appId: "projectforwebnotifications"
    })

}

export const inicializarFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: 'your messagingSenderId'
    });

    navigator.serviceWorker
        .register('/my-sw.js')
        .then((registration) => {
            firebase.messaging().useServiceWorker(registration);
        });
}

export const askForPermissionToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await Notification.requestPermission();
        const token = await messaging.getToken();
        console.log('token to user:', token);

        return token;
    } catch (error) {
        console.error(error);
    }
}


