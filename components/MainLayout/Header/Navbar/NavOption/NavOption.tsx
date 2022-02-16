import Link from 'next/link'
import { useContext } from 'react'
import { MainContext } from '../../../../../hooks/MainContext'

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

const CurrentPageButton = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
`

const DifferentPageButton = styled.a`
    text-decoration: none;
    cursor: pointer;
    $hover {
        font-weight: bold;
    }
`

const NavOption = ({ page }: INavOptionProps) => {
    const {
        view: {
            Navigation: { currentPage },
        },
        changePage,
    } = useContext(MainContext)

    const isCurrentPage = currentPage === page

    const onClickChangePageHandler = () => {
        changePage(page)
    }

    return (
        <NavOptionContainer>
            {isCurrentPage ? (
                <CurrentPageIndicatorOn />
            ) : (
                <CurrentPageIndicatorOff />
            )}
            <Link href={`${page === 'HOME' ? '/' : `/${page.toLowerCase()}`}`}>
                {isCurrentPage ? (
                    <CurrentPageButton>{page}</CurrentPageButton>
                ) : (
                    <DifferentPageButton onClick={onClickChangePageHandler}>
                        {page}
                    </DifferentPageButton>
                )}
            </Link>
        </NavOptionContainer>
    )
}

export default NavOption
