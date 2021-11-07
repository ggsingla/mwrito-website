import Background from "../components/background"
import { TrendingCourses } from "../components/Courses/TrendingCourses"
import { Footer } from "../components/Footer/Footer"
import { Nav } from "../components/NavBar"
import { Container } from "../components/styles/BasicUI/Container.styled"

const CoursePage = () => {
    return (
        <>
          <Background />
        <Container>
          <Nav />
          
        </Container>
        <Container>
            <TrendingCourses/>
        </Container>
        <Footer/>
        </>
    )
}

export default CoursePage
