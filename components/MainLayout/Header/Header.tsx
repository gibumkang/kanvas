import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import IconBar from './IconBar/IconBar'
import Logo from './Logo/Logo'
import OffCanvasMenu from './OffCanvasMenu/OffCanvasMenu'

const HeaderContainer = styled.div`
    display: flex;
    padding: 20px 40px;
    position: absolute;
    width: auto;
    min-width: 100%;
    max-width: 100vw;
    align-items: stretch;
    @media only screen and (max-width: 768px) {
        justify-content: flex-end !important;
    }
`

const LogoContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

const Grower = styled.div`
    flex-grow: 6;
`

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
                <Navbar />
            </LogoContainer>
            <Grower></Grower>
            <IconBar />
            <OffCanvasMenu />
        </HeaderContainer>
    )
}

export default Header
