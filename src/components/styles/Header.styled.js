import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  & > *{
    flex: 1;
  }
  @media screen and (max-width: ${({theme})=> theme.mobile}){
    flex-direction: column-reverse;
  }
`;
export const StyledH1 = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: normal;
  text-align: left;
  span {
    font-weight: bold;
  }
`;
export const BgLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  z-index: -1;
`;
export const Image = styled.img`
  max-width: 55%;
  @media screen and (max-width: ${({theme})=> theme.mobile}){
    max-width: 80%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 40%;
  gap: 2em;
  p{
    font-size: clamp(0.6rem, 2vw, 1rem);
  }
  &::nth-child(2) {
    margin-bottom: 2em;
  }
  @media screen and (max-width: ${({theme})=> theme.mobile}){
    align-items: center;
    max-width: 90%;
    text-align: center;
    flex: 1;
  }
`;
