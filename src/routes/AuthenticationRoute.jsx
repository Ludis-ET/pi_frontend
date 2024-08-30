import { Routes, Route } from "react-router-dom";
import { Login } from "../pages";
import { MainRoute } from "./MainRoute";

export const AuthenticationRoute = () => {
  const user = 0;
  if (!user) return <Login />;
  return <MainRoute />;
};
