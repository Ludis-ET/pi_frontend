import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "./AuthenticationContext";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { myprofile } = useContext(AuthContext);
  const [students, setStudents] = useState({});
  const [currentStudent, setCurrentStudent] = useState(null);

  const getStudent = async () => {
    try {
      let response = await Promise.race([
        fetch(`${backendUrl}user/students/?parent=${myprofile.phone}`),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000)
        ),
      ]);

      let data = await response.json();
      if (response.status === 200) {
        setStudents(data);
      } else {
        toast.error(data.detail);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (myprofile && !students) {
    getStudent();
  }
  console.log(students);
  return (
    <StudentContext.Provider value=""> {children}</StudentContext.Provider>
  );
};
