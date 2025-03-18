/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  FC,
  ReactNode,
  Context,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

interface AppContextType {
  role: string;
  username: string;
  tenant: string | "";
  setTenant: React.Dispatch<React.SetStateAction<string | "">>;
  checkRole: (role: string) => string;
  handleRoleChange: (newRole: string) => void;
  handleUserNameChange: (newUser: string) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (token: string | null) => void;
  logout: () => void;
  PrivateRoutes: ({ requiredRole }: { requiredRole: string }) => JSX.Element;
}

const AppContext: Context<AppContextType | undefined> = createContext<
  AppContextType | undefined
>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const { firebaseUser } = useFirebaseAuth();

  // Set Axios Base URL
  axios.defaults.baseURL = "https://homepro-fac9.onrender.com/api";

  const [role, setRole] = useState<string>(
    () => localStorage.getItem("role") || ""
  );
  const [username, setUserName] = useState<string>(
    () => localStorage.getItem("tenantUser") || ""
  );
  const [tenant, setTenant] = useState<string>(
    () => localStorage.getItem("tenant") || ""
  );

  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("accessToken") || null
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refreshToken") || null
  );

  useEffect(() => {
    if (!firebaseUser) return;

    (async () => {
      const token = await firebaseUser.getIdToken();
      setAccessToken(token);
    })();
  }, [firebaseUser]);

  // Update Axios headers when auth token changes
  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      localStorage.setItem("accessToken", accessToken);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("accessToken");
    }
  }, [accessToken]);

  useEffect(() => {
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      localStorage.removeItem("refreshToken");
    }
  }, [refreshToken]);

  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role);
    }
    if (tenant) {
      localStorage.setItem("tenant", tenant);
    }
  }, [role, tenant]);

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
  };

  const handleUserNameChange = (newUser: string) => {
    setUserName(newUser);
  };

  const checkRole = (role: string): string => {
    const roleMapping: Record<string, string> = {
      "": "Super User",
      Admin: "Admin",
      Manager: "Manager",
      "Rule Analyst": "Rule Analyst",
      "Fraud Analyst": "Fraud Analyst",
      Auditor: "Auditor",
    };

    const normalizedRole = roleMapping[role] || "Unknown";
    setRole(normalizedRole);
    return normalizedRole;
  };

  const PrivateRoutes = ({ requiredRole }: { requiredRole: string }) => {
    const storedRole = localStorage.getItem("role");
    return storedRole === requiredRole ? (
      <Outlet />
    ) : (
      <Navigate to="/" replace />
    );
  };

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setRole("");
    setTenant("");
    setUserName("");
    setAccessToken(null);
    setRefreshToken(null);
  };

  return (
    <AppContext.Provider
      value={{
        handleRoleChange,
        handleUserNameChange,
        username,
        checkRole,
        role,
        logout,
        setAccessToken,
        accessToken,
        setRefreshToken,
        refreshToken,
        tenant,
        setTenant,
        PrivateRoutes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "You're trying to access a variable outside of the Context Provider"
    );
  }

  return context;
};

export { AppProvider, useAppContext };
