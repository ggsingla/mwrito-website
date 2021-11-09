import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles/BasicUI/Container.styled';
import { StyledNav, Logo, NavLinks, Burger } from './styles/NavBar.styled';

export const Nav = (props) => {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <Container>
      <StyledNav>
        <Link to = "/">
          <Logo>M WRITO</Logo>
        </Link>
        <NavLinks menu= {isOpen} >
          <ul>
            <Link to = '/'>
                <li>Home</li>
            </Link>
            <Link to= '/courses'>
                <li>Courses</li>
            </Link>
            <Link to='/blogs'>
              <li>Blogs</li>
            </Link>
            <li>Contact Us</li>
          </ul>
        </NavLinks>
        <Burger menu = {isOpen} onClick = {() => setIsOpen(prev => !prev)}><FaBars/></Burger>
      </StyledNav>
    </Container>
  );
};
