const admin = require('firebase-admin');

const serviceAccountKey = require('@config/prius-main-serviceaccountkey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: "https://prius-main.firebaseio.com"
});
