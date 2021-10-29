import styled from "styled-components";

export const StyledHeader = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    h1{
        font-size: 3.5rem;
        font-weight: normal;
        span{
            font-weight: bold;
        }
    }
    
`
export const BgLogo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    z-index: -1;

`
export const Image = styled.img`
    width: 55%;
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 40%;
    gap: 1em;
    &::nth-child(2){
        margin-bottom: 2em;
    }
`