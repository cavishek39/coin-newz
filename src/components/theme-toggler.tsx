import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  // console.log("theme", theme);

  return (
    <div>
      {theme === "dark" ? (
        <div
          className="flex cursor-pointer items-center"
          onClick={() => {
            onToggleTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <HiSun className="mr-2 text-2xl text-primary" />
          Light Mode
        </div>
      ) : (
        <div
          className="flex cursor-pointer items-center"
          onClick={() => {
            onToggleTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <HiMoon className="mr-2 text-2xl text-primary" />
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggler;
