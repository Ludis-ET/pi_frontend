import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Home } from "../pages";

export const MainRoute = () => {
  const user = 1;

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Login />} />
        </>
      )}
    </Routes>
  );
};
