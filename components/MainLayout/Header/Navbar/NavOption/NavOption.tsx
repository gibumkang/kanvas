import Link from 'next/link'
import { useRouter } from 'next/router'

import styled from 'styled-components'

interface INavOptionProps {
    page?: String
}

const NavOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
`

const CurrentPageIndicatorOn = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: gold;
`

const CurrentPageIndicatorOff = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
`

const NavLinkBold = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
`

export const NavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    &:hover {
        font-weight: bold;
        color: black;
    }
`

const NavOption = ({ page }: INavOptionProps) => {
    const pathName = useRouter().pathname
    const currentPage = pathName === "/" ? "HOME" : pathName.split("/")[1].toUpperCase();

    const isCurrentPage = currentPage === page

    return (
        <NavOptionContainer>
            {isCurrentPage ? (
                <CurrentPageIndicatorOn />
            ) : (
                <CurrentPageIndicatorOff />
            )}
            <Link href={`${page === 'HOME' ? '/' : `/${page.toLowerCase()}`}`}>
                {isCurrentPage ? (
                    <NavLinkBold>{page}</NavLinkBold>
                ) : (
                    <NavLink>{page}</NavLink>
                )}
            </Link>
        </NavOptionContainer>
    )
}

export default NavOption
