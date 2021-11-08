import { Button } from "../styles/BasicUI/Button.styled";
import { StyledH1 } from "../styles/Header.styled";
import { CardArray } from "./CardArray";
import { Container, StyledSection } from "../styles/BasicUI/Container.styled";
import { Link } from "react-router-dom";
export const TrendingCourses = () => {
  return (
      <Container>
        <StyledSection>
          <StyledH1>Trending Courses</StyledH1>
          <CardArray/>
          <Link to ='/courses'><Button bg= "#368F8B">View all Courses</Button></Link>
        </StyledSection>
      </Container>
  );
};
