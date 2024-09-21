import { LeftBar, RightBar, Loading } from "../utils";
import { Header } from "../components/Header";
import {
  Home,
  Discussion,
  Four04,
  Fee,
  Event,
  Logout,
  CourseReccomendation,
} from "../pages";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, StudentContext } from "../context";

export const HomeRoute = () => {
  const { loading } = useContext(AuthContext);
  const { failedSubjects } = useContext(StudentContext);
  return (
    <div className="w-full h-full overflow-hidden flex justify-between">
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
            {failedSubjects.length > 0 && (
              <Route
                path="/recommendations"
                element={<CourseReccomendation />}
              />
            )}
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
