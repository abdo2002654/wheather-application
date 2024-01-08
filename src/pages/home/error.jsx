import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import * as Router from "react-router-dom";

export default function Error() {
  const error = Router.useRouteError();
  return (
    <Container>
      {error.message === "404" ? (
        <Typography variant="h6">
          <Router.Navigate to="/cities?error=no such city found" />
        </Typography>
      ) : (
        <Typography variant="h5">{error.message}</Typography>
      )}
    </Container>
  );
}

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: 40,
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
});
