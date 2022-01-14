import Background from '../components/background';
// import { BackToTop } from '../components/styles/BasicUI/BackToTop.js';
// import { LatestBlogs } from '../components/Blogs/LatestBlogs';
import { ContactForm } from '../components/ContactUs/ContactForm';
import { TrendingCourses } from '../components/Courses/TrendingCourses';
import { Features } from '../components/Features';
import { Header } from '../components/Header';
import { SpecialButton } from '../components/SpecialButton';

const Home = () => {
  return (
    <>
     <Background/>
      <Header />
      {/* <BackToTop/> */}
      <Features />
      <SpecialButton />
      {/* <LatestBlogs /> */}
      <TrendingCourses />
      <ContactForm />
    </>
  );
};

export default Home;
