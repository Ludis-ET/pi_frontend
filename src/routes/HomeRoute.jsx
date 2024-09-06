import { LeftBar, RightBar } from "../components";
import { Header } from "../components/Header";
import { Home } from "../pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";

export const HomeRoute = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <LeftBar />
      <div className="w-1/2 flex flex-col">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <RightBar />
    </div>
  );
};
