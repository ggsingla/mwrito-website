import { StyledContactDetails } from "../styles/ContactUs/ContactDetails.styled" 
import {FaHashtag, FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
export const ContactDetails = () => {
    return (
        <StyledContactDetails>
                <h3><FaEnvelope/>email.address@email.com</h3>
                <h3><FaPhoneAlt/>+91 7896543331</h3>
                <h3><FaHashtag/>3425 Stone Street, Apt. 2A, Jacksonville, FL 39404.</h3>
        </StyledContactDetails>
    )
}
