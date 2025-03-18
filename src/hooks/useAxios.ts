import { useMemo, useEffect } from "react";
import axios from "axios";
import useFirebaseAuth from "./useFirebaseAuth";

const useAxios = () => {
  const { firebaseUser } = useFirebaseAuth();

  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: import.meta.env.VITE_REACT_APP_TingoGPT_API,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []); // Create instance only once

  useEffect(() => {
    console.log("firebaseUser: \n", firebaseUser?.displayName);
    if (!firebaseUser) return;

    const requestInterceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        const idToken = await firebaseUser.getIdToken();
        if (idToken) {
          config.headers.Authorization = `Bearer ${idToken}`;
        } else {
          throw new Error("No token");
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [firebaseUser, axiosInstance]); // Attach interceptor when user changes

  return axiosInstance; // Return instance directly
};

export default useAxios;
