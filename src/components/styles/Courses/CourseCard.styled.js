import styled from "styled-components";

export const StyledCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(27, 96, 106, 0.5);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  padding: 20px;
  border-radius: 10px;
  gap: 3em;
  h3 {
    font-weight: normal;
  }
`;
export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .difficuly {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .nums {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1ch;
    h3 {
      font-weight: 600;
    }
    .separator {
      width: 1px;
      height: 30px;
      background-color: ${({ theme }) => theme.colors.light};
    }
  }
`;
export const PaymentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 1ch;
  h2 {
    color: ${({ theme }) => theme.colors.select};
    font-weight: bold;
  }
  h3 {
    text-decoration-line: line-through;
    color: #a09f9f;
  }
`;
export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  gap: 2ch;
  .tag{
    background: #368F8B;
border-radius: 5px;
color : ${({theme})=>theme.colors.dark};
padding: 2%;
font-size: smaller;
font-weight: bold;
  }
  a, a:active, a:visited{
    color:#F77F00;
    text-decoration: none;
    vertical-align: 0;
    font-weight: bolder;
    display: flex;
    align-items: center;
    gap: 1ch;
  }
`;
