import { useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import useFirebase from "./useFirebase";

const provider = new GoogleAuthProvider();

interface AuthState {
  firebaseUser: User | null;
  isInitialised: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signUpWithEmail: (
    displayName: string,
    email: string,
    password: string
  ) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const useFirebaseAuth = (): AuthState => {
  const { auth } = useFirebase();
  const [isInitialised, setIsInitialised] = useState(false);
  const [firebaseUser, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsInitialised(true);
    });
    return () => unsubscribe();
  }, [auth]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const signUpWithEmail = async (
    displayName: string,
    email: string,
    password: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName });
      setUser(userCredential.user);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
      window.location.href = "/";
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return {
    firebaseUser,
    isInitialised,
    error,
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    signOutUser,
  };
};

export default useFirebaseAuth;
