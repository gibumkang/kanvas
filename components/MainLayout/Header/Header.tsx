import Navbar from './Navbar/Navbar'

import styled from 'styled-components'

import IconBar from './IconBar/IconBar'
import { MainContext } from '../../../hooks/MainContext'
import { useContext } from 'react'
import Logo from './Logo/Logo'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
`

const LogoContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

const Header = () => {
    const {
        view: {
            Navigation: { currentPage },
        },
    } = useContext(MainContext)

    return (
        <HeaderContainer>
            <LogoContainer>
                {currentPage === 'HOME' ? null : <Logo />}
                <Navbar />
            </LogoContainer>
            <IconBar />
        </HeaderContainer>
    )
}

export default Header
