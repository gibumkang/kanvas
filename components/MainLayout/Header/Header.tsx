import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import Logo from './Logo/Logo'
import OffCanvasMenu from './OffCanvasMenu/OffCanvasMenu'
import { useRouter } from 'next/router'
import { meta } from '../../../data/meta'
import HelmetComponent from './HelmetComponent'

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
    & > div > nav > a {
        text-decoration: none;
        color: #333;
        padding-right: 3rem;
        text-align: right;
        transition: all 0.25s ease-in-out;
        &:nth-last-child(1) {
            padding-right: 0rem;
        }
        &:hover {
            color: #000;
        }
        &.active {
            font-weight: bold;
            color: #000;
        }
    }
    &.home {
        & > div > nav > a {
            text-decoration: none;
            color: #ccc;
            padding-right: 3rem;
            text-align: right;
            transition: all 0.25s ease-in-out;
            &:nth-last-child(1) {
                padding-right: 0rem;
            }
            &:hover {
                color: #fff;
            }
            &.active {
                font-weight: bold;
                color: #fff;
            }
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
    const router = useRouter()
    return (
        <>
            <HelmetComponent />
            <HeaderContainer className={router.pathname == '/' ? 'home' : ''}>
                <LogoContainer>
                    <Logo
                        logo={
                            router.pathname == '/'
                                ? meta[0].whitelogo
                                : meta[0].darklogo
                        }
                    />
                </LogoContainer>
                <div>
                    <Navbar />
                </div>
                <OffCanvasMenu />
            </HeaderContainer>
        </>
    )
}

export default Header
