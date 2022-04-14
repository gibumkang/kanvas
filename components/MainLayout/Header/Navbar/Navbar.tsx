import styled from 'styled-components'
import { links } from '../../../../data/links'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {CgMenuRound} from 'react-icons/cg'
import { HeaderContext } from '../../../../hooks/HeaderContext'
import { useContext } from 'react'

const NavbarContainer = styled.nav`
    text-align: right;
    .menu {
        display: none;
        font-size: 2.4rem;
        transition: all .25s ease-in-out;
        cursor: pointer;
        &:hover {
            color: ${(props) => props.theme.colors.primary};
        }
    }
    @media only screen and (max-width: 768px) {
        .links {
            display: none;
        }
        .menu {
            display: block;
        }
    }
`

const Navbar = () => {
    const router = useRouter()
    const {setView} = useContext(HeaderContext)

    return (
        <NavbarContainer>
            {links.map((link) => {
                return (
                    <Link passHref href={link.link} key={link.link}>
                        <a
                            className={`${router.pathname == link.link ? 'active' : ''} links`}
                        >
                            {link.title}
                        </a>
                    </Link>
                )
            })}
            <a className="menu" onClick={() => setView(true)}><CgMenuRound /></a>
        </NavbarContainer>
    )
}

export default Navbar
