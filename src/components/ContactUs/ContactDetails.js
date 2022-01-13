import { StyledContactDetails } from '../styles/ContactUs/ContactDetails.styled';
import { FaHashtag, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
export const ContactDetails = () => {
  return (
    <StyledContactDetails>
      <h3>
        <FaEnvelope />
        aoyt@mwrito.com
      </h3>
      {/* <h3>
        <FaPhoneAlt />
        +91 86079 69369
      </h3> */}
      <h3>
        <FaHashtag />
        41, amandeep avanue, maqsudan Jalandhar Punjab 144027
      </h3>
    </StyledContactDetails>
  );
};
