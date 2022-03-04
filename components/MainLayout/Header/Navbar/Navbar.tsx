import NavOption from './NavOption/NavOption'

import styled from 'styled-components'

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: unset;
    gap: 20px;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavOption page="HOME" />
            <NavOption page="SERVICES" />
            <NavOption page="GALLERY" />
            <NavOption page="STORY" />
            <NavOption page="CONTACT" />
        </NavbarContainer>
    )
}

export default Navbar
