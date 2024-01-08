import styled from "@emotion/styled";
import { imgKeys } from "../../key/key";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

export default function WeatherSection({ data }) {
  console.log(data);
  const icon = data.weather[0].icon;
  const imgUrl = `../../../public/assets/imgs/${imgKeys[icon]}.png`; // weather img
  const weather = data.weather[0].description; // weather status
  const temprature = (data.main.temp - 273).toFixed(2); // celsius
  const pressure = data.main.pressure; // hpa
  const humidity = data.main.humidity; // %
  const wind = data.wind.speed; // m/s
  const name = data.name;
  const time = data.timezone;
  return (
    <Grid container sx={{ flexGrow: 1, padding: { xs: 1, md: 3 } }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          padding: 2,
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          width="100%"
          justifyContent={"space-around"}
          direction={{ xs: "column", md: "row" }}
          rowGap={2}
          alignItems="center"
        >
          <Typography variant="h4">{name.toUpperCase()}</Typography>
          <Typography variant="h4" color="warning.main">
            {temprature}
            <sup style={{ fontSize: 20, margin: 10 }}>o</sup>
          </Typography>
        </Stack>
        <img loading="lazy" src={imgUrl} alt={weather} className="h-44" />
        <Typography variant="h3">{weather.toLowerCase()}</Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper>
          <Grid container sx={{ flexGrow: 1 }} gridTemplateAreas={2} p={3}>
            <GridItem item xs={6} sx={{ borderWidth: "0 .1px .1px 0" }}>
              <Typography
                variant="h5"
                color="primary"
                sx={{ fontWeight: "300" }}
              >
                pressure
              </Typography>
              <Typography variant="body2">{pressure} hpa</Typography>
            </GridItem>
            <GridItem item xs={6} sx={{ borderWidth: "0 0 .1px .1px" }}>
              <Typography
                variant="h5"
                color="primary"
                sx={{ fontWeight: "300" }}
              >
                wind
              </Typography>
              <Typography variant="body2">{wind} m/s</Typography>
            </GridItem>
            <GridItem item xs={6} sx={{ borderWidth: ".1px .1px 0 0 " }}>
              <Typography
                variant="h5"
                color="primary"
                sx={{ fontWeight: "300" }}
              >
                humidity
              </Typography>
              <Typography variant="body2">{humidity} %</Typography>
            </GridItem>
            <GridItem item xs={6} sx={{ borderWidth: ".1px 0 0 .1px" }}>
              <Typography
                variant="h5"
                color="primary"
                sx={{ fontWeight: "300" }}
              >
                timezone
              </Typography>
              {time}
            </GridItem>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

const GridItem = styled(Grid)({
  display: "flex",
  gap: 16,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBlock: 30,
  borderStyle: "solid",
  borderColor: "#ddd8",
});
