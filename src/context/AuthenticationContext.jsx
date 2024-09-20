import { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [myprofile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isTokenExpired = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  };

  useEffect(() => {
    if (authTokens && user) {
      const id = user.user_id;
      const getProfile = async () => {
        setLoading(true);
        try {
          const token = authTokens ? authTokens.access : null;
          const response = await fetch(`${backendUrl}api/parents`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setProfile(data[0]);
          } else {
            toast.error("Failed to fetch profile data");
          }
        } catch (error) {
          toast.error("Error fetching profile data");
        } finally {
          setLoading(false);
        }
      };
      getProfile();
    }
  }, [authTokens, user]);

  let loginUser = async (ph, pass) => {
    try {
      setLoading(true);
      let response = await Promise.race([
        fetch(`${backendUrl}auth/jwt/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: ph,
            password: pass,
          }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000)
        ),
      ]);

      let data = await response.json();
      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        toast.success("Logged in successfully");
        navigate("/");
      } else {
        toast.error(data.detail);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  let updateToken = async () => {
    if (authTokens && !isTokenExpired(authTokens.access)) {
      try {
        let response = await Promise.race([
          fetch(`${backendUrl}auth/jwt/refresh/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refresh: authTokens?.refresh,
            }),
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), 20000)
          ),
        ]);

        let data = await response.json();
        if (response.status === 200) {
          setAuthTokens(data);
          setUser(jwtDecode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));
        } else {
          logoutUser();
        }
      } catch (error) {
        toast.error(error.message);
        logoutUser();
      }
    } else {
      logoutUser();
    }
  };

  let logoutUser = () => {
    setLoading(true);
    setUser(null);
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
    toast.success("Logged out successfully");
    setLoading(false);
  };

  useEffect(() => {
    if (authTokens && !loading) {
      updateToken();
    }

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, [authTokens]);

  const value = {
    user,
    loginUser,
    logoutUser,
    myprofile,
    authTokens,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
