require('dotenv').config();
const admin = require('firebase-admin');
const { castData } = require('./zTests/data.js');

admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
});

const db = admin.firestore();

db.collection('casts').add(castData[0]);
console.log('Added document with ID: ', castData[0]);

for (let item of castData) {
    res = db.collection('casts').add(item)
    console.log('added document with ID: ', res.id);
    console.log('Add: ', res);
  }