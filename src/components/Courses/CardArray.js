import { CourseCard } from "./CourseCard"
import {StyledCardArray} from "../styles/Courses/CardArray.styled"
export const CardArray = () => {
    return (
        <StyledCardArray>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </StyledCardArray>
    )
}
