import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  setDoc,
  doc,
  arrayUnion,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrJHjZvdGZS4QigT-m0-JsksI8EcnIuWs",
  authDomain: "pixabay-46c9c.firebaseapp.com",
  projectId: "pixabay-46c9c",
  storageBucket: "pixabay-46c9c.appspot.com",
  messagingSenderId: "10723072473",
  appId: "1:10723072473:web:4a1c24b990f9cf5365a1c8",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  }, [showNotification]);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const addToFavorites = async (imageId, imageURL, imageType, currentTime) => {
    try {
      await setDoc(
        doc(firestore, "users", user.uid),
        {
          favorites: arrayUnion({
            id: imageId,
            url: imageURL,
            type: imageType,
            time: currentTime,
          }),
        },
        { merge: true }
      );
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const getFavoriteImages = async () => {
    try {
      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          return userData.favorites || [];
        }
      }
      return [];
    } catch (error) {
      console.error("Error fetching favorite images:", error);
      throw error;
    }
  };

  const removeFromFavorites = async (imageId) => {
    try {
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const favorites = userData.favorites || [];
        const updatedFavorites = favorites.filter(
          (favorite) => favorite.id !== imageId
        );
        await updateDoc(userDocRef, { favorites: updatedFavorites });
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
      setError(error.message);
    }
  };

  const addToDownloads = async (imageId, imageURL, imageType, currentTime) => {
    try {
      await setDoc(
        doc(firestore, "users", user.uid),
        {
          downloads: arrayUnion({
            id: imageId,
            url: imageURL,
            type: imageType,
            time: currentTime,
          }),
        },
        { merge: true }
      );
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const getDownloads = async () => {
    try {
      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          return userData.downloads || [];
        }
      }
      return [];
    } catch (error) {
      console.error("Error fetching favorite images:", error);
      throw error;
    }
  };

  const removeFromDownloads = async (imageId) => {
    try {
      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const downloads = userData.downloads || [];
        const updatedDownloads = downloads.filter(
          (download) => download.id !== imageId
        );
        await updateDoc(userDocRef, { downloads: updatedDownloads });
      }
    } catch (error) {
      console.error("Error removing from downloads:", error);
      setError(error.message);
    }
  };

  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const userWithGoogleAccount = async () => {
    try {
      await signInWithPopup(firebaseAuth, googleProvider);
    } catch (error) {
      setError(error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      setError(error.message);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signUpWithEmailAndPassword,
        logInWithEmailAndPassword,
        userWithGoogleAccount,
        isLoggedIn,
        logOut,
        user,
        error,
        clearError,
        addToFavorites,
        removeFromFavorites,
        getFavoriteImages,
        addToDownloads,
        getDownloads,
        removeFromDownloads,
        showNotification,
        setShowNotification,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
