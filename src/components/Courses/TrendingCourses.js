import { Button } from "../styles/BasicUI/Button.styled";
import { StyledH1 } from "../styles/Header.styled";
import { CardArray } from "./CardArray";
import { StyledSection } from "../styles/BasicUI/Container.styled";
export const TrendingCourses = () => {
  return (
      <StyledSection>
        <StyledH1>Treanding Courses</StyledH1>
        <CardArray/>
        <Button bg= "#368F8B">View all Courses</Button>
      </StyledSection>
  );
};
