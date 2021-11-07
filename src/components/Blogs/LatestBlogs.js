import { Button } from "../styles/BasicUI/Button.styled";
import { Container, StyledSection } from "../styles/BasicUI/Container.styled";
import { StyledLatestBlogs } from "../styles/Blogs/LatestBlogs.styled";
import { StyledH1 } from "../styles/Header.styled";
import { BlogCards } from "./BlogCards";
export const LatestBlogs = () => {
  return (

    <Container>
      <StyledSection>
        <StyledLatestBlogs>
          <StyledH1>Latest Blogs</StyledH1>
          <BlogCards/>
          <Button bg= "#368F8B" >View All Blogs</Button>
        </StyledLatestBlogs>
      </StyledSection>
    </Container>
  );
};
