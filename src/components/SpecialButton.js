import { Button, LinedButton } from "./styles/BasicUI/Button.styled";
import { FaGooglePlay } from "react-icons/fa";
import { StyledSection } from "./styles/BasicUI/Container.styled";
export const SpecialButton = () => {
  return (
    <StyledSection>
      <LinedButton>
          <div className="left"></div>
        <Button>
          Download Now
          <FaGooglePlay />
        </Button>
        <div className="right"></div>
      </LinedButton>
    </StyledSection>
  );
};
