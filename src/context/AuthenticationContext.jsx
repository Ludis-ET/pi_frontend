import { createContext, useState, useEffect, useContext } from "react";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Importing toast

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
  const [myProfile, setProfile] = useState(null);

  const [loadingMyProfile, setLoadingMyProfile] = useState(true);

  useEffect(() => {
    if (authTokens && user) {
      const id = user.user_id;
      const getProfile = async () => {
        try {
          const token = authTokens ? authTokens.access : null;
          const response = await fetch(`${backendUrl}api/profile/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Corrected token type
            },
          });
          if (response.ok) {
            const data = await response.json();
            setProfile(data);
          } else {
            console.error("Failed to fetch profile data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching profile data:", error);
        } finally {
          setLoadingMyProfile(false); // Set loading state to false after fetching
        }
      };
      getProfile();
    }
  }, [authTokens, user]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    try {
      let response = await Promise.race([
        fetch(`${backendUrl}auth/jwt/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
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
        toast.success("Logged in successfully"); // Show success message
        navigate("/");
      } else {
        toast.error("Invalid Credentials"); // Show error message
      }
    } catch (error) {
      toast.error(error.message); // Show error message
    }
  };

  const updateToken = async () => {
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
        setUser(null);
        setAuthTokens(null);
        localStorage.removeItem("authTokens");
      }
      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message); // Show error message
    }
  };

  const logoutUser = () => {
    setUser(null);
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
    toast.success("Logged out successfully"); // Show success message
    navigate("/login");
  };

  const value = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    myProfile: myProfile,
    loadingMyProfile: loadingMyProfile,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourMin = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMin);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
