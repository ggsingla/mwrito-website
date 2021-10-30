import { Buy, PaymentDetails, Price, Stats, StyledCourseCard } from "../styles/Courses/CourseCard.styled";
import {FaAngleRight} from 'react-icons/fa'
export const CourseCard = () => {
  return (
    <StyledCourseCard>
      <h3>Full syllabus + JEE foundation course</h3>
      <Stats>
        <div className="difficulty">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/Difficulty Selector/Difficulty Bar E.svg"
            }
            alt=""
          />
          <p>Easy</p>
        </div>
        <div className="nums">
          <div className="videos">
            <h3>50</h3>
            <p>Videos</p>
          </div>
          <div className="separator"></div>
          <div className="time">
            <h3>50</h3>
            <p>Hours</p>
          </div>
        </div>
      </Stats>
      <PaymentDetails>
          <Price>
              <h3>&#8377;6000</h3>
              <h2>&#8377;4999</h2>
          </Price>
          <Buy>
            <div className="tag">Class 8</div>
            <a href="#">More Details <FaAngleRight/></a>
          </Buy>
      </PaymentDetails>
    </StyledCourseCard>
  );
};
