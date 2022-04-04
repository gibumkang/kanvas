import styled from 'styled-components'
import { links } from '../../../../data/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavbarContainer = styled.nav`
    text-align: right;
    & > a {
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
    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const Navbar = () => {
    const router = useRouter()
    return (
        <NavbarContainer>
            {links.map((link) => {
                return (
                    <Link passHref href={link.link}>
                        <a
                            className={
                                router.pathname == link.link ? 'active' : ''
                            }
                        >
                            {link.title}
                        </a>
                    </Link>
                )
            })}
        </NavbarContainer>
    )
}

export default Navbar
