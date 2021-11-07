import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1200px;
    max-width: 100%;
    padding: 0 2em;
    flex-direction: column;
`
export const StyledSection = styled.section`
    margin: 4em 0;
    width: 100%;
    @media screen and (max-width: ${({theme})=> theme.mobile}){
        align-items: center;
        justify-content: center;
  }
`