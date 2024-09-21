import { useState, useContext, useEffect } from "react";

export const useFetchEvent = () => {
  const { authTokens } = useContext(AuthContext);
  const [events, setEvents] = useState(null);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchFee = async () => {
      try {
        const response = await fetch(
          `${backendUrl}api/events/`,
          {
            headers: {
              Authorization: `Bearer ${authTokens.access}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    fetchFee();
  }, [backendUrl]);
  return events;
}
