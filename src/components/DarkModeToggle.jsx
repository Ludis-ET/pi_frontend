import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("dark-mode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 w-[50px] h-[50px] dark:bg-gray-800 text-black dark:text-white rounded flex items-center justify-center"
    >
      {isDarkMode ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </button>
  );
};
