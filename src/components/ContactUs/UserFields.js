import { StyledUserFields } from "../styles/ContactUs/ContactForm.styled";
import {
  FormGroup,
  Label,
  Input,
  InputBig,
} from "../styles/ContactUs/InputFields.styled";

export const UserFields = () => {
  return (
    <StyledUserFields>
      <FormGroup>
        <Label htmlFor="label">Your Name</Label>
        <Input type="text" id="label" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" />
      </FormGroup>
      <FormGroup>
        <Label>Your Message</Label>
        <InputBig />
      </FormGroup>
    </StyledUserFields>
  );
};
