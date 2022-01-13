import { Button, LinedButton } from "./styles/BasicUI/Button.styled";
import { FaGooglePlay } from "react-icons/fa";
import { StyledSection } from "./styles/BasicUI/Container.styled";
export const SpecialButton = () => {
  return (
    <StyledSection>
      <LinedButton>
          <div className="left"></div>
          <a href="https://play.google.com/store/apps/details?id=com.wisewizard.writo_learning_app">
        <Button>
          Download Now
          <FaGooglePlay />
        </Button>
        </a>
        <div className="right"></div>
      </LinedButton>
    </StyledSection>
  );
};
