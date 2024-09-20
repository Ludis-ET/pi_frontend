import { LeftBar, RightBar, Loading } from "../utils";
import { Header } from "../components/Header";
import { Home, Discussion, Four04, Fee, Event, Logout } from "../pages";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context";

export const HomeRoute = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="w-full h-full flex justify-between">
      <LeftBar />
      <div className="lg:w-1/2 w-screen flex flex-col min-h-screen">
        <Header />
        {loading ? (
          <Routes>
            <Route path="*" element={<Loading />} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/fee" element={<Fee />} />
            <Route path="/events" element={<Event />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Four04 />} />
          </Routes>
        )}
      </div>
      <RightBar />
    </div>
  );
};
