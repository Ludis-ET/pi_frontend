import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Home } from "../pages";

export const MainRoute = () => {
  const user = 1;

  return (
    <div className="w-full h-full absolute">
      <Routes>
        {user ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  );
};
