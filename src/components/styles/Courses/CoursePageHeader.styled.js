import styled from 'styled-components';
export const CourseDetails = styled.div`
    display: flex;
    font-weight: bold;
    justify-content:flex-start;
    gap : 50%;
    flex-wrap: nowrap;
`;
export const StyledRegisterModal = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
`;
export const Images = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items: center;
    gap: 5em;
    @media screen and (max-width: 1200px){
        flex-direction: column;
    }
    img{
        width: clamp(300px, 40%, 600px);
  @media screen and (max-width: ${({theme})=> theme.mobile}){
    max-width: 80%;
  }
    }
`;
export const Text = styled.div`
display: grid;
place-items: center;
    flex-direction: column;
    margin: 2em;
    width: 70%;
    gap: 5em;
    h1{
        font-size: clamp(2rem, 5vw, 3rem);
        text-align: center;
    }
`;

