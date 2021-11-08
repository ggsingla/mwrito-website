import { CourseCard } from "./CourseCard"
import {StyledCardArray} from "../styles/Courses/CardArray.styled"
import courseData from '../../courseData'
export const CardArray = () => {
    return (
        <StyledCardArray>
            {courseData.map((item, index) => (
          <CourseCard key={index} item={item} />
        ))}
        </StyledCardArray>
    )
}
