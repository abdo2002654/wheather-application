import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import ModeSwitch from "../theme/modeSwitch";
import * as Icon from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <Toolbar className="xs:p-4 md:p-2">
        <Link>
          <img
            src="../../public/assets/imgs/cloud-moon.png"
            alt="logo"
            className="h-8"
          />
        </Link>
        <Typography variant="h6" className=" flex-1 px-2 font-bold">
          WEATHER APP
        </Typography>
        <IconButton color="inherit" onClick={() => navigate("/cities")}>
          <Icon.LocationOn />
        </IconButton>
        <ModeSwitch />
      </Toolbar>
    </AppBar>
  );
}
