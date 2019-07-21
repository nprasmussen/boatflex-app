import Vue from 'vue';
import firebase from 'firebase';
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

// Get a Firestore instance
const db = firebase.firestore();

export default db;


// // retrieve a document
// db.collection('pinCode')
//   .doc(documentId)
//   .get()
//   .then(snapshot => {
//     const document = snapshot.data()
//     console.log(document);
//     // do something with document
//   })
