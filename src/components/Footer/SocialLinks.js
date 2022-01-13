import { StyledSocialLinks } from "../styles/Footer.styled"
import {FaGooglePlay, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope, FaWhatsapp} from 'react-icons/fa'
export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <a href="https://www.linkedin.com/company/writo-learning-solutions" target= "_blank"><FaLinkedinIn/></a>
            <a href="https://www.instagram.com/writoeducation/" target= "_blank"><FaInstagram/></a>
            <a href="https://youtube.com/channel/UCZgcJxcKyGn4ENUQBsrrfmQ?sub_confirmation=1" target= "_blank"><FaYoutube/></a>
            <a href="mailto:aoyt@mwrito.com" target= "_blank"><FaEnvelope/></a>
            <a href="https://wa.me/+917460051297" target= "_blank"><FaWhatsapp/></a>
            <a href="https://play.google.com/store/apps/details?id=com.wisewizard.writo_learning_app"><FaGooglePlay/></a>
        </StyledSocialLinks>
    )
}
