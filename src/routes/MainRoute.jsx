import { Routes, Route, Navigate } from "react-router-dom";
import { HomeRoute } from "./HomeRoute";
import { Login } from "../pages";
import { useContext } from "react";
import { AuthContext } from "../context";

export const MainRoute = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full bg-white dark:bg-gray-800 h-full absolute">
      <Routes>
        <Route path="*" element={user ? <HomeRoute /> : <Login />} />
      </Routes>
    </div>
  );
};
