import { createTheme, styled, Theme, ThemeProvider, useTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      dark: "#D8D8D8",
      light: "#E3E6EB59",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#F1FFD9",
      dark: "#C8F5B3",
      light: "#CECFD1",
      contrastText: "#c2c2c21f",
    },
    warning: {
      main: "#FFB800",
      light: "#FFB800",
    }
  },
  spacing: 10,
  typography: {
    fontFamily:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: 28,
      lineHeight: "20px",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 20,
      lineHeight: "25px",
    },
    h3: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "20px",
    },
    h4: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 12,
      lineHeight: "15px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export { theme, ThemeProvider, createTheme, styled, useTheme };
export type { Theme };

const customTheme = createTheme(theme, {});

export default customTheme;
