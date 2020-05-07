import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#F0A500",
    secondary: "#577590",
    dark: "#000000",
    onyx: "#36313D"
  },
  fonts: ["raleway", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
