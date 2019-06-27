import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDh-OOUoilA_XZy8M7uRO_QOplU7jXEJrc",
    authDomain: "reactnativeproject-c4e2d.firebaseapp.com",
    databaseURL: "https://reactnativeproject-c4e2d.firebaseio.com",
    projectId: "reactnativeproject-c4e2d",
    storageBucket: "reactnativeproject-c4e2d.appspot.com",
    messagingSenderId: "145079624080",
    appId: "1:145079624080:web:caa2d8bcdb2f350e"
};
app=firebase.initializeApp(config);

export default app;