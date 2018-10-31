import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCYuJ-OAwfpEeXpyY5SwMNLe9ftzSaTr34",
    authDomain: "breadstoremanager.firebaseapp.com",
    databaseURL: "https://breadstoremanager.firebaseio.com",
    projectId: "breadstoremanager",
    storageBucket: "breadstoremanager.appspot.com",
    messagingSenderId: "453882030539"
  };
  firebase.initializeApp(config);

 export const bsData = firebase.database().ref('dataForBreadStore');
 export const checkoutData = firebase.database().ref('dataForCheckOut');
