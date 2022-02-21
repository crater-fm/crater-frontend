import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import Header from "./Header.js";
import ScrollToTop from "./ScrollToTop.js";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Toolbar id="back-to-top-anchor" variant="dense" sx={{ minHeight: 0 }} />
      <Container>
        <Outlet />
      </Container>
      <ScrollToTop />
    </ThemeProvider>
  );
}
