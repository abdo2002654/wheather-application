import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <CustomFooter>
      <Typography variant="h6">copy_right &copy;</Typography>
    </CustomFooter>
  );
}

const CustomFooter = styled(Box)({
  display: "flex",
  justifyContent: "center",
  background: "#333",
  padding: 10,
  color: "#eee",
});
