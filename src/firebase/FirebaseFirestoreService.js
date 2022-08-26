import firebase from "./FirebaseConfig";
import {
  addDoc,
  doc,
  getDoc,
  collection as firestoreCollection,
  query,
  where,
  limit,
  startAfter,
  getDocs,
  updateDoc,
  deleteDoc,
  writeBatch,
} from "firebase/firestore/lite";

//db
const firestore = firebase.firestore;

const createDocument = (collection, document) => {
  return addDoc(firestoreCollection(firestore, collection), document);
};

const readDocument = (collection, id) => {
  return getDoc(doc(firestore, collection, id));
};

const readDocuments = async ({ collection, queries, perPage, cursorId }) => {
  const collectionRef = firestoreCollection(firestore, collection);

  const queryConstraints = [];
  if (queries && queries.length > 0) {
    for (const query of queries) {
      queryConstraints.push(where(query.field, query.condition, query.value));
    }
  }

  if (perPage) {
    queryConstraints.push(limit(perPage));
  }

  if (cursorId) {
    const document = await readDocument(collection, cursorId);
    queryConstraints.push(startAfter(document));
  }

  const firestoreQuery = query(collectionRef, ...queryConstraints);

  return getDocs(firestoreQuery);
};

const updateDocument = (collection, id, document) => {
  return updateDoc(doc(firestore, collection, id), document);
};

const updateDocuments = async (collection, list) => {
  try {
    const batch = writeBatch(firestore);

    list.forEach((item) => {
      const ref = doc(firestore, collection, item.id);
      batch.update(ref, { ...item });
    });

    await batch.commit();
  } catch (error) {
    throw error;
  }
};

const deleteDocument = (collection, id) => {
  return deleteDoc(doc(firestore, collection, id));
};

const FirebaseFirestoreService = {
  createDocument,
  readDocuments,
  updateDocument,
  deleteDocument,
  updateDocuments,
};

export default FirebaseFirestoreService;
