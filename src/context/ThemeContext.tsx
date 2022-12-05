import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import { Theme } from "../types/theme";

type ThemeContextProps = {
  theme: Theme;
  onToggleTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

type ThemeProviderProps = {
  initialTheme: Theme;
  children: ReactNode;
};

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPref = window.localStorage.getItem("color-theme");
    if (typeof storedPref === "string") {
      return storedPref;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  onToggleTheme: () => {},
});

export const ThemeProvider = ({
  initialTheme = "dark",
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<any>(getInitialTheme);

  const rawSetTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    const isDark = initialTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(initialTheme);

    if (typeof window !== "undefined") {
      localStorage.setItem("color-theme", theme);
    }
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(initialTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
