import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return userDocRef;
};
