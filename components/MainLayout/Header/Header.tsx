import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import IconBar from './IconBarAndOffCanvasMenu/IconBar'
import Logo from './Logo/Logo'
import OffCanvasMenu from './OffCanvasMenu/OffCanvasMenu'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background: #888;
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
