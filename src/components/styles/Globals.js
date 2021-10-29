import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway";

const GlobalStyles = createGlobalStyle`
  * {
      margin :0;
      padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
    background:${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.light};
    position: relative;
    font-size: 1.15em;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  div#root {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
