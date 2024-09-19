import { createContext } from "react";
import { toast } from "react-hot-toast";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {};
