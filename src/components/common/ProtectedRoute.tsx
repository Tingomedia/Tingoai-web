import { useEffect } from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";

interface ProtectedRouteProps {
  element: JSX.Element;
  requiredRole?: string; // Optional role requirement
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isInitialised, firebaseUser } = useFirebaseAuth();

  useEffect(() => {
    if (!isInitialised) return;
    if (!firebaseUser) {
      const returnUrl = encodeURIComponent(window.location.href);
      window.location.href = `/login?returnUrl=${returnUrl}`;
      // return <Navigate to={`/signup?returnUrl=${returnUrl}`} replace />;
    }
  }, [isInitialised, firebaseUser]);

  return element;
};

export default ProtectedRoute;
