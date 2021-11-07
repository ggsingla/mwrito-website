import styled from "styled-components";

export const StyledCardArray = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: stretch;
  flex-wrap: wrap;
  gap: 40px;
  margin: 5em 0;
  @media screen and (max-width: ${({theme})=> theme.mobile}){
    flex-direction: column;
    
  }
`;
