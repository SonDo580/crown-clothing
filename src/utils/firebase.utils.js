import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMUecgJU2P6r80NNV5AVx85UindbuU4C4",
  authDomain: "crown-clothing-e660f.firebaseapp.com",
  projectId: "crown-clothing-e660f",
  storageBucket: "crown-clothing-e660f.appspot.com",
  messagingSenderId: "720500975117",
  appId: "1:720500975117:web:48fc5bd7a646d782689744",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const db = getFirestore(firebaseApp);

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const createEmailPasswordUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmailPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });

export const createUserDocument = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInfo,
    });
  }

  return userSnapshot;
};

export const addCollectionDocuments = async (
  collectionKey,
  objectsToAdd,
  keyField
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj[keyField]);
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const getCategoryDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categories = querySnapshot.docs.map((docSnapshot) => {
    const { title, items, imageUrl } = docSnapshot.data();
    return { title: title.toLowerCase(), items, imageUrl };
  });

  return categories;
};
