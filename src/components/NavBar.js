import {StyledNav, Logo, NavLinks} from './styles/NavBar.styled'

export const Nav = () => {
    return (
        <StyledNav>
            <Logo>
                M WRITO
            </Logo>
            <NavLinks>
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </NavLinks>
        </StyledNav>
    )
}
