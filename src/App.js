import Background from "./components/background";
import './index.css'
import GlobalStyles from "./components/styles/Globals";
import { ThemeProvider } from "styled-components";
import { Nav } from "./components/NavBar";
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";
import Feature from "./components/Feature";
import content from './content'
const theme = {
  colors: {
    dark: "#051721",
    light: "#F5FCFF",
  },
  mobile: "768px",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Background />
        <Container>
          <Nav />
          <Header />
          {content.map((item, index) => (
            <Feature key={index} item={item} />
          ))}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
