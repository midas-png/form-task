import { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#17212B',
  secondary: '#242f3d',
  tertiary: '#7177f8',
  selected: "#525AFF",
  error: '#ff6270',
  text: {
    primary: '#fff',
    secondary: '#7f91a4',
    tertiary: '#000',
  },
  fontFamily: 'Stem',
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
