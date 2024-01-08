import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { ThemeContext } from "./themeProvider";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ModeSwitch() {
  const { darkMode, modeToggle } = React.useContext(ThemeContext);
  return (
    <Tooltip content="light" enterDelay={600} leaveDelay={2000}>
      <IconButton onClick={modeToggle} color="inherit">
        {darkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
}
