import Background from "./components/background";
import GlobalStyles from "./components/styles/Globals";
import { ThemeProvider } from "styled-components";
import { Nav } from "./components/NavBar";
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";

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
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
