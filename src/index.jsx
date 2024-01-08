import React from "react";
import ReactDOM from "react-dom/client";
import GlobalTheme from "./theme/themeProvider";
import App from "./AppRouter.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalTheme>
      <CssBaseline />
      <App />
    </GlobalTheme>
  </React.StrictMode>
);
