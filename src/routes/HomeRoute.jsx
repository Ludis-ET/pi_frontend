import { LeftBar, RightBar } from "../utils";
import { Header } from "../components/Header";
import { Home, Discussion, Four04, Fee } from "../pages";
import { Routes, Route } from "react-router-dom";

export const HomeRoute = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <LeftBar />
      <div className="lg:w-1/2 w-screen flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="*" element={<Four04 />} />
        </Routes>
      </div>
      <RightBar />
    </div>
  );
};
