import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway";

const GlobalStyles = createGlobalStyle`
  * {
      margin :0;
      padding: 0;
    box-sizing: border-box;
  }

  body {
    background:${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.light};
    font-family: 'Raleway', sans-serif;
    font-size: 1.15em;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
