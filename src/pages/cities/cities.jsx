import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as Icon from "@mui/icons-material";
import * as Router from "react-router-dom";
import React from "react";

export default function Cities() {
  const [searchParams] = Router.useSearchParams();
  const error = searchParams.get("error") || "pick up acity above";

  const [city, setCity] = React.useState("");

  return (
    <Box className="flex flex-1 items-center justify-center flex-col gap-8">
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <img src="../assets/imgs/city.png" alt="city" className="h-16" />
        <Typography variant="h3"> CITY SELECTION </Typography>
      </Stack>
      <Router.Form method="post">
        <Paper elevation={3} className="p-8 flex flex-col w-[400px] gap-4">
          <Typography variant="h6" sx={{ fontWeight: "300", marginBlock: 2 }}>
            pick your city
          </Typography>
          <FormControl>
            <TextField
              label="city"
              name="city"
              defaultValue={city}
              onChange={(e, v) => setCity(v)}
            />
            <FormHelperText> {error} </FormHelperText>
          </FormControl>
          <Button
            size="large"
            variant="contained"
            startIcon={<Icon.LocationOn />}
            type="submit"
          >
            go a head
          </Button>
        </Paper>
      </Router.Form>
    </Box>
  );
}

export const action = async ({ request }) => {
  const url = await request.formData();
  const city = url.get("city");

  return Router.redirect(`/weather?city=${city}`);
};
