import { FaGooglePlay } from "react-icons/fa";
import {
  StyledHeader,
  Image,
  HeaderContent,
  BgLogo,
  StyledH1,
} from "./styles/Header.styled";
import { Button } from "./styles/BasicUI/Button.styled";
import { Container, StyledSection } from "./styles/BasicUI/Container.styled";
export function Header() {
  return (
    <Container>
      <StyledSection>
    <StyledHeader>
      <BgLogo src={process.env.PUBLIC_URL + "/assets/logo_light.svg"} />
      <HeaderContent>
        <StyledH1>
          Make yourself <span>future</span> fit
        </StyledH1>
        <p>
          There is no time better than "now" to be start and achieve your competitive exam cracking goals
          for the future with our live video classes from expert mentors,
          interactive doubt solving sessions, and well-strategized mock paper
          quizzes. Be "future-ready" on this rich learning experience with us.
        </p>
        <a href="https://play.google.com/store/apps/details?id=com.wisewizard.writo_learning_app">
          <Button>
            Get the App
            <FaGooglePlay />
          </Button>
        </a>
      </HeaderContent>
      <Image src={process.env.PUBLIC_URL + "/assets/mockup.png"} alt="mockup" />
    </StyledHeader>
    </StyledSection>
    </Container>
  );
}
