import React from "react";
import * as Router from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../../components/header";
import styled from "@emotion/styled";

export default function Layout() {
  return (
    <Container>
      <Header />
      <Router.Outlet />
    </Container>
  );
}

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
});
