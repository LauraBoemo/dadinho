import {
  createTheme, styled, Theme, ThemeProvider, useTheme,
} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#E3E6EB59',
      contrastText: '#FFF',
    },
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
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 30,
      lineHeight: '30px',
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: 20,
      lineHeight: '20px',
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: 16,
      lineHeight: '15px',
    },
    body1: {
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: 12,
      lineHeight: '10px',

    },
  },
});

export {
  theme, ThemeProvider, createTheme, styled, useTheme,
};
export type { Theme };

export default theme;
