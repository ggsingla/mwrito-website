import { StyledSocialLinks } from "../styles/Footer.styled"
import {FaGooglePlay, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope, FaWhatsapp} from 'react-icons/fa'
export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <a href="https://www.linkedin.com/in/writo-learning-solutions-b2810b206"><FaLinkedinIn/></a>
            <a href="https://www.instagram.com/writolearning/"><FaInstagram/></a>
            <a href="https://youtube.com/channel/UCZgcJxcKyGn4ENUQBsrrfmQ?sub_confirmation=1"><FaYoutube/></a>
            <a href="writohr@gmail.com"><FaEnvelope/></a>
            <a href="https://wa.me/+917460051297"><FaWhatsapp/></a>
            <a href="/"><FaGooglePlay/></a>
        </StyledSocialLinks>
    )
}
