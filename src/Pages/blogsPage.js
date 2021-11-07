import Background from "../components/background"
import { LatestBlogs } from "../components/Blogs/LatestBlogs"
import { ContactForm } from "../components/ContactUs/ContactForm"
import { TrendingCourses } from "../components/Courses/TrendingCourses"
import Feature from "../components/Feature"
import content from "../content";
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header"
import { Nav } from "../components/NavBar"
import { SpecialButton } from "../components/SpecialButton"
import { Container } from "../components/styles/BasicUI/Container.styled"
import BlogPageHeader from "../components/Blogs/BlogPageHeader"

const BlogsPage = () => {
    return (
        <>
          <Background />
        <Container>
          <Nav />
          <BlogPageHeader/>
        </Container>
        <Container>
        <LatestBlogs/>
        </Container>
        <Footer/>
        </>
    )
}

export default BlogsPage
