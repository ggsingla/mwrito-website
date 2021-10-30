import { Button, LinedButton } from "./styles/Button.styled";
import { FaGooglePlay } from "react-icons/fa";
export const SpecialButton = () => {
  return (
    <>
      <LinedButton>
          <div className="left"></div>
        <Button>
          Download Now
          <FaGooglePlay />
        </Button>
        <div className="right"></div>
      </LinedButton>
    </>
  );
};
