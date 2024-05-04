const db = require('db');

export async function addDoc(db, collectionName, docData) {
  const res = await db.collection(collectionName).add(docData);
  console.log('Added document with ID: ', res.id);
  console.log('Add: ', res);
}

export async function addDocs(db, collectionName, docsData) {
  for (let docData of docsData) {
    res= await db.collection(collectionName).add(docData)
    console.log('added document with ID: ', res.id);
    console.log('Add: ', res);
  }
}

// export async function testAddData(db) {
//   const docRef = db.collection('users').doc('alovelace');
//   await docRef.set({
//       first: 'Ada',
//       last: 'Lovelace',
//       born: 1815
//   });

//   const aTuringRef = db.collection('users').doc('aturing');
  
//   await aTuringRef.set({
//       'first': 'Alan',
//       'middle': 'Mathison',
//       'last': 'Turing',
//       'born': 1912
//   });
//   console.log('Added data to Firestore');

// }

// export async function getCollections(db) {
//   const dbcollection = await db.collection('users').get();
//   if (!dbcollection.exists) {
//     console.log('No such collection!');
//   } else {
//     console.log('collections data:', dbcollection.data());
//   }
// }
// // Function to get a document by id
// export async function getDocument(collectionName, docId) {
//   const docRef = db.collection(collectionName).doc(docId);
//   const doc = await docRef.get();
//   if (!doc.exists) {
//     console.log('No such document!');
//     return null;
//   } else {
//     console.log('Document data:', doc.data());
//     return doc.data();
//   }
// }

// // Function to get all documents in a collection
// export async function getAllDocuments(collectionName) {
//   const snapshot = await db.collection(collectionName).get();
//   return snapshot.docs.map(doc => doc.data());
// }

// export async function quickstartQuery(db) {
//   // Realtime listens are not yet supported in the Node.js SDK
//   const snapshot = await db.collection('users').where('born', '<', 1900).get();
//   return snapshot.docs.map(doc => doc.data())
// };
