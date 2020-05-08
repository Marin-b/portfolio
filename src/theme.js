import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#F0A500",
    secondary: "#577590",
    dark: "#000000",
    onyx: "#36313D",
    disabled: "#DBDBDB",
    "Ruby on Rails": "#C5283D",
    "React": "#7392B7",
    "Javascript": "#F2C94C"
  },
  fonts: ["raleway", "Roboto"],
  fontSizes: {
    paragraph: "1em",
    small: "1.5em",
    medium: "2em",
    large: "3em"
  },
  splitTreshold: "1000"
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
