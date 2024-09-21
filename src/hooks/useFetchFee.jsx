import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context";

export const useFetchFee = () => {
  const { authTokens, myprofile, setLoading } = useContext(AuthContext);
  const [fee, setFee] = useState(null);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchFee = async () => {
      try {
        const response = await fetch(
          `${backendUrl}api/fees/?parent=${myprofile.id}`,
          {
            headers: {
              Authorization: `Bearer ${authTokens.access}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setFee(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    setLoading(true);
    fetchFee();
    setLoading(false);
  }, [backendUrl]);
  return fee;
};
