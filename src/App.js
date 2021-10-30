import Background from "./components/background";
import "./index.css";
import GlobalStyles from "./components/styles/Globals";
import { ThemeProvider } from "styled-components";
import { Nav } from "./components/NavBar";
import { Container } from "./components/styles/BasicUI/Container.styled";
import { Header } from "./components/Header";
import Feature from "./components/Feature";
import content from "./content";
import { SpecialButton } from "./components/SpecialButton";
import { TrendingCourses } from "./components/Courses/TrendingCourses";
import { ContactForm } from "./components/ContactUs/ContactForm";
import { Footer } from "./components/Footer/Footer";
import { LatestBlogs } from "./components/Blogs/LatestBlogs";

const theme = {
  colors: {
    dark: "#051721",
    light: "#F5FCFF",
    select: "#37AE5F",
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
        <SpecialButton />
        <Container>
        <LatestBlogs/>
          <TrendingCourses />
          <ContactForm />
        </Container>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
