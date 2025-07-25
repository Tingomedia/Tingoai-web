import { useEffect } from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
// import BlinkingBird from "./BlinkingBird";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  element?: JSX.Element;
  requiredRole?: string; // Optional role requirement
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isInitialised, firebaseUser } = useFirebaseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isInitialised) return;
    if (!firebaseUser) {
      const isRoot = location.pathname === "/" || location.pathname === "";

      if (isRoot) {
        navigate("/login");
      } else {
        const returnUrl = encodeURIComponent(window.location.href);
        navigate(`/login?returnUrl=${returnUrl}`);
      }
      // const returnUrl = encodeURIComponent(window.location.href);
      // window.location.href = `/login?returnUrl=${returnUrl}`;
    }
  }, [isInitialised, firebaseUser]);

  // if (!firebaseUser) return <BlinkingBird centered />;

  if (!element) return <Outlet />;
  return element;
};

export default ProtectedRoute;
