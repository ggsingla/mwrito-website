import { Link } from "react-router-dom"
import { StyledFooterLinks } from "../styles/Footer.styled"

export const FooterLinks = () => {
    return (
        <StyledFooterLinks>
            <Link to='about'>About</Link>
            <Link to='/faqs'>FAQs</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/">Refund Policy</Link>
            <Link to="/">Terms of Service</Link>
        </StyledFooterLinks>
    )
}
