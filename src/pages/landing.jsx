import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Grid container className="flex-1">
      <Grid item className="landing-text" xs={12} md={6}>
        <Stack spacing={3} className="items-center md:items-start">
          <h1 className="landing-h1">WELCOME TO WHEATHER APP</h1>
          <p className="landing-p">
            your special site to get the current weather of any city or country
            in the whole world with additional infos like humidity and
            temprature and pressure ...etc, interested? try us out below
          </p>
          <Link to="/cities">
            <Button variant="contained">get started</Button>
          </Link>
        </Stack>
      </Grid>
      <Grid item className="flex justify-center items-center" xs={12} md={6}>
        <img
          src="../assets/imgs/thunderstorm.png"
          alt="logo"
          className="h-[300px] lg:h-[400px]"
        />
      </Grid>
    </Grid>
  );
}
