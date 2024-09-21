import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context";

export const useFetchCourse = ({ id }) => {
  const { authTokens, setLoading } = useContext(AuthContext);
  const [courses, setCourses] = useState(null);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchFee = async () => {
      try {
        const response = await fetch(
          `${backendUrl}api/courses/?subject=${id}`,
          {
            headers: {
              Authorization: `Bearer ${authTokens.access}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
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
  return courses;
};
