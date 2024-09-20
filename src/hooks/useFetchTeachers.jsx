import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context";

export const useFetchTeachers = () => {
  const { authTokens } = useContext(AuthContext);
  const [teachers, setTeachers] = useState(null);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(`${backendUrl}api/teachers`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTeachers(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    fetchTeachers();
  }, [backendUrl]);
  return teachers;
};
