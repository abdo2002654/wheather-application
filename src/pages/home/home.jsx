import React from "react";
import api from "../../key/key";
import { Box } from "@mui/material";
import Loading from "./loading";
import styled from "@emotion/styled";
import * as Router from "react-router-dom";
import WeatherSection from "./weatherSection";

export default function Home() {
  const { data } = Router.useLoaderData();

  return (
    <Container>
      <React.Suspense fallback={<Loading />}>
        <Router.Await resolve={data}>
          {(data) => <WeatherSection data={data} />}
        </Router.Await>
      </React.Suspense>
    </Container>
  );
}

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: 40,
  gap: 20,
});

export const loader = async ({ request }) => {
  const city = new URL(request.url).searchParams.get("city");
  if (!city) throw Router.redirect("/cities?error=you must provide acity");
  if (!navigator.onLine) throw Router.redirect("/cities?error=you are offline");

  const response = await fetch(`${api.baseUrl}?q=${city}&APPID=${api.key}`);
  if (!response.ok) throw new Error(response.status);
  return Router.defer({ data: response.json() });
};
