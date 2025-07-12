import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    console.log("Theme set to:", theme, "data-theme attribute:", document.documentElement.getAttribute("data-theme"));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
