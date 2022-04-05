import styled from 'styled-components'
import { links } from '../../../../data/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavbarContainer = styled.nav`
    text-align: right;
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
                    <Link passHref href={link.link} key={link.link}>
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
