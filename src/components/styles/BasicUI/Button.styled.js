import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  cursor: pointer;
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
  width: max-content;
  transition: all 300ms ease-in-out;
  &:hover{
    background-color: ${({ theme }) => theme.colors.light};
  }
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