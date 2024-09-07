import { LeftBar, RightBar } from "../utils";
import { Header } from "../components/Header";
import { Home, Discussion } from "../pages";
import { Routes, Route, Navigate } from "react-router-dom";

export const HomeRoute = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <LeftBar />
      <div className="lg:w-1/2 w-screen flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <RightBar />
    </div>
  );
};
