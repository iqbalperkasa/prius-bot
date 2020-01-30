const serviceAccountKey = require('@config/prius-main-serviceaccountkey.json');
const firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccountKey),
  databaseURL: 'https://prius-main.firebaseio.com',
});

const db = firebase.firestore();

const logger = require('@helpers/logger');

module.exports = {
  db,
  logger,
};
