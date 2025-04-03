import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  User,
  sendPasswordResetEmail,
} from "firebase/auth";
import useFirebase from "../hooks/useFirebase";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

interface AuthContextType {
  firebaseUser: User | null;
  isInitialised: boolean;
  isAuthenticating: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signUpWithEmail: (
    displayName: string,
    email: string,
    password: string
  ) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const FirebaseAuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const { auth } = useFirebase();
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [isInitialised, setIsInitialised] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (isSignUp) return;
      setFirebaseUser(currentUser);
      setIsInitialised(true);
    });
    return () => unsubscribe();
  }, [auth]);

  const getFirebaseErrorMessage = (error: Error): string => {
    if (!error.message) return "An unknown error occurred. Please try again.";
    if (error.message.includes("auth/invalid-email"))
      return "Invalid email format.";
    if (error.message.includes("auth/user-not-found"))
      return "No account found with this email.";
    if (error.message.includes("auth/wrong-password"))
      return "Incorrect password.";
    if (error.message.includes("auth/too-many-requests"))
      return "Too many attempts. Try again later.";
    if (error.message.includes("auth/invalid-credential"))
      return "Invalid credentials.";
    return error.message; // Default to Firebase's message if no custom mapping
  };

  const signInWithGoogle = async () => {
    try {
      setIsAuthenticating(true);
      const result = await signInWithPopup(auth, provider);
      setFirebaseUser(result.user);
    } catch (err) {
      const errorMessage = getFirebaseErrorMessage(err as Error);
      toast.error(errorMessage);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const signUpWithEmail = async (
    displayName: string,
    email: string,
    password: string
  ) => {
    try {
      setIsAuthenticating(true);
      setIsSignUp(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName });
      setFirebaseUser(userCredential.user);
    } catch (err) {
      const errorMessage = getFirebaseErrorMessage(err as Error);
      toast.error(errorMessage);
    } finally {
      setIsAuthenticating(false);
      setIsSignUp(false);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setIsAuthenticating(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setFirebaseUser(userCredential.user);
    } catch (err) {
      const errorMessage = getFirebaseErrorMessage(err as Error);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setIsAuthenticating(true);
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "If an account exists, a password reset email has been sent! Check your inbox.",
        { duration: 7000 }
      );
    } catch (err) {
      const errorMessage = getFirebaseErrorMessage(err as Error);
      toast.error(errorMessage);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setFirebaseUser(null);
      window.location.href = "/";
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <FirebaseAuthContext.Provider
      value={{
        firebaseUser,
        isInitialised,
        isAuthenticating,
        error,
        signInWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        resetPassword,
        signOutUser,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useFirebaseAuth = () => {
  const context = useContext(FirebaseAuthContext);
  if (!context) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }
  return context;
};
