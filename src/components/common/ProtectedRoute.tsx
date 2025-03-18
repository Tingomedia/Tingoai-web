import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useEffect } from "react";

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
      window.location.href = `/signup?returnUrl=${returnUrl}`;
      // return <Navigate to={`/signup?returnUrl=${returnUrl}`} replace />;
    }
  }, [isInitialised, firebaseUser]);

  return element;
};

export default ProtectedRoute;
