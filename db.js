import Firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyAxNWJe9pzHRCDR2P0p4wZNHt1TBsUjlnI",
    authDomain: "unipark-4ad6c.firebaseapp.com",
    databaseURL: "https://unipark-4ad6c.firebaseio.com",
    projectId: "unipark-4ad6c",
    storageBucket: "unipark-4ad6c.appspot.com",
    messagingSenderId: "155179896409"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();