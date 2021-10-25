import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 19px;
  background-color: ${({ bg }) => bg || "#F77F00"};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
`;
