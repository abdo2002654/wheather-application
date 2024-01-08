import React from "react";
import { ThemeProvider, colors, createTheme } from "@mui/material";

export const ThemeContext = React.createContext(null);

export default function GlobalTheme({ children }) {
  const [darkMode, setDarkMode] = React.useState(true);

  const modeToggle = () => {
    setDarkMode((pre) => !pre);
    window.localStorage.setItem("mode", darkMode ? "light" : "dark");
  };

  React.useEffect(() => {
    if (window.localStorage.getItem("mode") === "dark") setDarkMode(true);
    if (window.localStorage.getItem("mode") === "light") setDarkMode(false);
  }, []);

  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            body2: {
              fontWeight: "700",
              opacity: 0.7,
              fontSize: 14,
            },
            h4: {
              fontWeight: "700",
            },
            h3: {
              fontWeight: "300",
              textTransform: "uppercase",
              textAlign: "center",
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              background: darkMode ? colors.grey[900] : colors.blue[900],
              color: "white",
            },
          },
        },
      },
    });
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, modeToggle }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
