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
  onToggleTheme: React.Dispatch<React.SetStateAction<string>>;
};

type ThemeProviderProps = {
  initialTheme: Theme;
  children: ReactNode;
};

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPref = window.localStorage.getItem("color-theme");
    if (typeof storedPref === "string") {
      return storedPref as Theme;
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
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    handleSetTheme(theme);
  }, [theme]);

  const handleSetTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    handleSetTheme(initialTheme);
  }

  const onToggleTheme = () => setTheme;

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
