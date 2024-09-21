import { NavLink } from "react-router-dom";
import { Four04 } from "../../pages";
import { Footer } from "../LeftBar/Footer";

export const More = () => {
  const cls = `w-full bg-purple-500 p-4 hover:p-2 text-white hover:text-black rounded-lg transition-all duration-2000 ease-in-out items-center flex gap-4 hover:text-2xl text-xl`;
  const activeClass = "text-black text-2xl p-2";
  return (
    <div className="overflow-y-auto">
      <div className="flex flex-col-reverse w-full justify-around items-center lg:hidden">
        <div className="w-full justify-center text-black items-center p-8 flex flex-col gap-4">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? `${cls} ${activeClass}` : cls
            }
          >
            <i className="fa fa-calendar"></i>
            <p>Events</p>
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? `${cls} ${activeClass}` : cls
            }
          >
            <i className="fa fa-info-circle"></i>
            <p>Help</p>
          </NavLink>
          <NavLink
            to="/information"
            className={({ isActive }) =>
              isActive ? `${cls} ${activeClass}` : cls
            }
          >
            <i className="fa fa-question-circle"></i>
            <p>Information</p>
          </NavLink>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive ? `${cls} ${activeClass}` : cls
            }
          >
            <i className="fa fa-power-off"></i>
            <p>Logout</p>
          </NavLink>
        </div>
        <Footer />
      </div>
      <div className="hidden lg:block">
        <Four04 />
      </div>
    </div>
  );
};
