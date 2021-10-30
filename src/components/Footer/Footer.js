import { StyledFooter } from "../styles/Footer.styled";
import { Copyright } from "./Copyright";
import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";
export const Footer = () => {
    return (
        <StyledFooter>
            <FooterLinks/>
            <SocialLinks/>
            <Copyright/>
        </StyledFooter>
    )
}
