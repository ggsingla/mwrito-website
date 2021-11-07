import './index.css';
import GlobalStyles from './components/styles/Globals';
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import BlogsPage from './Pages/blogsPage';
import CoursePage from './Pages/CoursePage';
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
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='blogs' element={<BlogsPage/>} />
          <Route path='courses' element={<CoursePage/>} />
          {/* <Route path='/blogs' component={BlogPage} />
          <Route path='/courses' component={CoursePage} /> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
