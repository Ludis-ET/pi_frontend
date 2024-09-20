import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setauthTokens] = useState(() =>
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

  const [loadingMyProfile, setLoadingMyProfile] = useState(true);
  useEffect(() => {
    if (authTokens && user) {
      const id = user.user_id;
      const getProfile = async () => {
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
          setLoadingMyProfile(false);
        }
      };
      getProfile();
    }
  }, [authTokens, user]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  let loginUser = async (ph, pass) => {
    try {
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
        setauthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        toast.success("Logged in successfully");
        navigate("/");
      } else {
        toast.error(data.detail);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  let updateToken = async () => {
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
        setauthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
      } else {
        setUser(null);
        setauthTokens(null);
        localStorage.removeItem("authTokens");
      }
      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  let logoutUser = () => {
    setUser(null);
    setauthTokens(null);
    localStorage.removeItem("authTokens");
    toast.success("Logged out successfully");
  };

  const value = {
    user,
    loginUser,
    logoutUser,
    myprofile,
    authTokens,
    loadingMyProfile,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let day = 1000 * 60 * 60 * 24;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, day);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
