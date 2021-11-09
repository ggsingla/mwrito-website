import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2em 0;
`;

export const Logo = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
`;

export const NavLinks = styled.div`
  display: flex;
  padding: 10px;
  list-style: none;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1.5em;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
    transform: translateX(40vw);
    transition: all 400ms ease-in-out;
    ${({menu}) =>{ if(menu){return (`
      display: block;
      z-index: 10;
      background-color:#051721;
      height: 100%;
      position: fixed;
      padding-inline: 1em;
      top: 0;
      right: 0;
      box-shadow: 0 -2px 30px rgba(0, 0, 0, 0.5);
      width: clamp(250px, 40vw, 100%);
      font-size: 1.5rem;
      transform: translateX(0);
      ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      width: 100%;
    }`)}}}
  }
`;

export const Burger = styled.button`
  display: none;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  color: white;
  cursor: pointer;
  font-size: 1.15rem;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    z-index: 10;
    ${({menu}) =>{ if(menu){return `position: fixed;right: 2em;`}}}
  }
`;

// nav #burger-hider {
//   display: block;
//   z-index: 10;
// }
// nav .active#burger-hider {
//   position : fixed;
//   right: 2em;
// }

// nav .nav-links {
//   display: none;
//   transform: translateX(40vw);
// }
// nav .nav-links.active {
//   display: block;
//   z-index: 10;
//   background-color: var(--white);
//   height: 100%;
//   position: fixed;
//   top: 0;
//   right: 0;
//   box-shadow: 0 -2px 30px rgba(0, 0,0, 0.5);
//   width: clamp(250px, 40vw, 100%);
//   font-size: 1.5rem;
//   transform: translateX(0);
// }
// nav .nav-links.active ul {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   height: 100%;
//   width: 100%;
// }
