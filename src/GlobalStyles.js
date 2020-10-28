import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      background-color: #1d1f21;
      font-family: Arial, Geneva, Helvetica, sans-serif;
    }
    #root {
      height: 100%;
      width: 100%;
    }
`;

export default GlobalStyle;