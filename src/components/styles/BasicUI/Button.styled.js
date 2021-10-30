import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding:15px 20px;
  background-color: ${({ bg }) => bg || "#F77F00"};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  gap : 20px;
  border: none;
  white-space: nowrap;
`;

export const LinedButton = styled.div` 
  margin: 40px 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: stretch;
  gap: 40px ;
  div{
    height: 1px;
    background-color: #f77f00;
    width: inherit;
  }
`