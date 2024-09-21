import { NavLink } from "react-router-dom";

export const FootBar = () => {
  const menuItems = [
    { to: "/", icon: "fa-home", label: "Home" },
    { to: "/discussion", icon: "fa-comments", label: "Discuss" },
    { to: "/attendance", icon: "fa-calendar", label: "Attendance" },
    { to: "/fee", icon: "fa-usd", label: "Fee" },
    { to: "/more", icon: "fa-info-circle", label: "More" },
    { to: "/setting", icon: "fa-gear", label: "setting" },
  ];

  const baseClass = "text-md flex flex-col gap-2 items-center";
  const activeClass = "bg-purple-400 text-black dark:text-white p-2 rounded-md";
  const inactiveClass = "text-black dark:text-white";

  return (
    <div className="lg:hidden bg-white dark:bg-gray-800 absolute bottom-0 left-0 w-full p-2 flex justify-center items-center gap-4">
      {menuItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <i className={`fa ${item.icon}`}></i>
          <p>{item.label}</p>
        </NavLink>
      ))}
    </div>
  );
};
