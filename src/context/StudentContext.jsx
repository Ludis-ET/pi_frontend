import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "./AuthenticationContext";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { myprofile, authTokens } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(null);
  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await Promise.race([
          fetch(`${backendUrl}api/students/?parent=${myprofile.id}`, {
            headers: {
              Authorization: `Bearer ${authTokens.access}`,
            },
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), 20000)
          ),
        ]);

        const data = await response.json();
        if (response.status === 200) {
          setStudents(data);
        } else {
          toast.error(data.detail);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (myprofile && students.length === 0 && authTokens) {
      getStudent();
    }
  }, [myprofile, students, authTokens]);

  useEffect(() => {
    if (students.length > 0 && !student) {
      setStudent(students[0]);
    }
  }, [students, student]);

  const value = {
    students,
    student,
    setStudent,
  };

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};
