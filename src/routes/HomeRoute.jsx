import { LeftBar, RightBar } from "../components";
import { Home } from "../pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";

export const HomeRoute = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <LeftBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <RightBar />
    </div>
  );
};
