import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import IconBar from './IconBar/IconBar'
import Logo from './Logo/Logo'
import OffCanvasMenu from './OffCanvasMenu/OffCanvasMenu'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between !important;
    padding: 20px 40px;
    position: absolute;
    width: 100vw;
`

const LogoContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
                <Navbar />
            </LogoContainer>
            <IconBar />
            <OffCanvasMenu />
        </HeaderContainer>
    )
}

export default Header
