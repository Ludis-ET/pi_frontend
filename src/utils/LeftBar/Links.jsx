import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StudentContext } from "../../context";

export const Links = () => {
  const { failedSubjects } = useContext(StudentContext);
  const cls = `w-full hover:bg-white hover:p-2 hover:text-black rounded-lg transition-all duration-2000 ease-in-out items-center flex gap-4 hover:text-2xl text-xl`;
  const activeClass = "bg-white text-black text-2xl p-2";

  return (
    <div className="w-full ml-8 justify-center text-white items-center p-12 flex flex-col gap-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `${cls} ${activeClass}` : cls)}
      >
        <i className="fa fa-home"></i>
        <p>Dashboard</p>
      </NavLink>
      {failedSubjects.length > 0 && (
        <NavLink
          to="/recommendations"
          className={({ isActive }) =>
            isActive ? `${cls} ${activeClass}` : cls
          }
        >
          <i className="fa-brands fa-discourse"></i>
          <p>Recommendations</p>
        </NavLink>
      )}
      <NavLink
        to="/discussion"
        className={({ isActive }) => (isActive ? `${cls} ${activeClass}` : cls)}
      >
        <i className="fa fa-comments"></i>
        <p>Discussion</p>
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) => (isActive ? `${cls} ${activeClass}` : cls)}
      >
        <i className="fa fa-calendar"></i>
        <p>Events</p>
      </NavLink>
      <NavLink
        to="/fee"
        className={({ isActive }) => (isActive ? `${cls} ${activeClass}` : cls)}
      >
        <i className="fa fa-usd"></i>
        <p>Fee</p>
      </NavLink>
      <NavLink
        to="/help"
        className={({ isActive }) => (isActive ? `${cls} ${activeClass}` : cls)}
      >
        <i className="fa fa-info-circle"></i>
        <p>Help</p>
      </NavLink>
      <NavLink
        to="/information"
        className={({ isActive }) => (isActive ? `${cls} ${activeClass}` : cls)}
      >
        <i className="fa fa-question-circle"></i>
        <p>Information</p>
      </NavLink>
      <NavLink
        to="/logout"
        className={({ isActive }) => (isActive ? `${cls} ${activeClass}` : cls)}
      >
        <i className="fa fa-power-off"></i>
        <p>Logout</p>
      </NavLink>
    </div>
  );
};
