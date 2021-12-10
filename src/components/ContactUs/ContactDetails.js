import { StyledContactDetails } from '../styles/ContactUs/ContactDetails.styled';
import { FaHashtag, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
export const ContactDetails = () => {
  return (
    <StyledContactDetails>
      <h3>
        <FaEnvelope />
        writoprovatelimited@gmail.com
      </h3>
      <h3>
        <FaPhoneAlt />
        +91 86079 69369
      </h3>
      <h3>
        <FaHashtag />
       G.T. Road, Amritsar Bypass, Jalandhar (Punjab), India - 144011
      </h3>
    </StyledContactDetails>
  );
};
