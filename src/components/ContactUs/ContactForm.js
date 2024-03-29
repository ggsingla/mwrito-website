import { StyledH1 } from "../styles/Header.styled";
import { Container, StyledSection } from "../styles/BasicUI/Container.styled";
import { UserFields } from "./UserFields";
import { ContactDetails } from "./ContactDetails";
import { FormContents } from "../styles/ContactUs/ContactForm.styled";

export const ContactForm = () => {
  
  return (
    <Container>
      <StyledSection>
        <StyledH1>Contact Us</StyledH1>
        <FormContents>
          <UserFields/>
          <ContactDetails/>
        </FormContents>
      </StyledSection>
      </Container>
  );
};
