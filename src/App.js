import './index.css';
import GlobalStyles from './components/styles/Globals';
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import BlogsPage from './Pages/blogsPage';
import CoursePage from './Pages/CoursePage';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/NavBar';
import { DownloadPage } from './Pages/downloadPage';
import { ContactPage } from './Pages/contactPage';
import { PrivacyPolicy } from './Pages/privacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import { TermsOfService } from './Pages/termsOfService';
import { FAQs } from './Pages/faqs';
import { AboutUs } from './Pages/aboutUs';

const theme = {
  colors: {
    dark: '#051721',
    light: '#F5FCFF',
    select: '#37AE5F',
  },
  mobile: '768px',
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav />
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='blogs' element={<BlogsPage/>} />
          <Route path='courses' element={<CoursePage/>} />
          <Route path='download' element={<DownloadPage/>} />
          <Route path='contactus' element={<ContactPage/>} />
          <Route path='privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='terms-of-service' element={<TermsOfService/>} />
          <Route path='faqs' element={<FAQs/>} />
          <Route path='about' element={<AboutUs/>} />
          {/* <Route path='/blogs' component={BlogPage} /> */}
          <Route path='/courses' component={CoursePage} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
