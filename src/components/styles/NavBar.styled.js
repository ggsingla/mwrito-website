import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 2em 0;
`;

export const Logo = styled.span`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
`;

export const NavLinks = styled.div`
  display: flex;
  padding: 10px;
  list-style: none;
  ul{
      list-style: none;
      display: flex;
      flex-direction: row;
      gap : 1.5em;
  }
`;