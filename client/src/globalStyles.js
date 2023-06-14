import { createGlobalStyle } from 'styled-components';
import StemMedium from './assets/Stem-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: Stem;
    src: url(${StemMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: ${({ theme }) => theme.fontFamily};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.primary};
  }
`;
