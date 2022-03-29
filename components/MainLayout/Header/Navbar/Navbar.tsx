import NavOption from './NavOption/NavOption'

import styled from 'styled-components'

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: unset;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavOption page="HOME" />
            <NavOption page="SERVICES" />
            {/* <NavOption page="GALLERY" /> */}
            <NavOption page="STORY" />
            <NavOption page="CONTACT" />
        </NavbarContainer>
    )
}

export default Navbar
