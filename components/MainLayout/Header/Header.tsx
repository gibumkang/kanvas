import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import IconBar from './IconBar/IconBar'
import Logo from './Logo/Logo'
import OffCanvasMenu from './OffCanvasMenu/OffCanvasMenu'

const HeaderContainer = styled.div`
    display: flex;
    padding: 2rem 4rem;
    position: absolute;
    z-index: 3;
    width: 100%;
    align-items: center;
    & > div {
        &:nth-child(2) {
            flex-grow: 1;
        }
    }
`

const LogoContainer = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <div>
                <Navbar />
            </div>
            <OffCanvasMenu />
        </HeaderContainer>
    )
}

export default Header
