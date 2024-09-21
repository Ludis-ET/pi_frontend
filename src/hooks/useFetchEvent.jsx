import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context";

export const useFetchEvent = () => {
  const { authTokens, setLoading } = useContext(AuthContext);
  const [events, setEvents] = useState(null);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchFee = async () => {
      try {
        const response = await fetch(`${backendUrl}api/events/`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
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
  return events;
};
