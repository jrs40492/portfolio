const dotenv = require('dotenv');
const firebase = require('firebase');
require('firebase/app');
require('firebase/firestore');

dotenv.config()

firebase.initializeApp({
  apiKey: `${process.env.FIRESTORE_API_KEY}`,
  authDomain: `${process.env.FIRESTORE_DOMAIN}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIRESTORE_DOMAIN}.firebaseio.com`,
  projectId: `${process.env.FIRESTORE_DOMAIN}`,
  storageBucket: `${process.env.FIRESTORE_DOMAIN}.appspot.com`,
  messagingSenderId: `${process.env.FIRESTORE_SENDER_ID}`
});

module.exports = firebase.firestore();
