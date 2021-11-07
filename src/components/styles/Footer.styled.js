import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:#0C151B ;
  width: 100%;
  padding: 40px 2em;
  gap:2em;
  margin-top: 4em;
`
export const StyledFooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap : clamp(2em, 10vw, 5em);
  row-gap: 2em;
  @media screen and (max-width: 600px){
    
  }
`
export const StyledSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2ch;
  font-size: 1.5rem;
  color : #A09F9F;
`
export const StyledCopyright = styled.p`
    color : #A09F9F;
    text-align: center;
`