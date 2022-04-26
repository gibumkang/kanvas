import React, { useState } from 'react'
import styled from 'styled-components'
import * as GS from '../../styles/global'
import { portfolio } from '../../data/portfolio'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface FilterProps {
    filterItem: (e: any) => void
}

const StyledContainer = styled.div`
    max-width: ${(props) => props.theme.maxWidth};
    padding: 0rem 3rem;
    margin: 0 auto;
`

const StyledGrid = styled.div`
    display: grid;
    grid-gap: 10rem;
    grid-template-columns: repeat(2, 1fr);
    & > div {
        .slide {
            border-radius: 1.5rem;
            border: 0.25rem solid #ccc;
            min-height: 50rem;
            margin-bottom: 1.5rem;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            background: #eee;
            transition: all 0.25s ease-in-out;
            transform: scale(1);
            width: 100%;
            max-height: 51rem;
            &:hover {
                transform: scale(1.025);
            }
            img {
                width: 100%;
                min-height: 51rem;
                object-fit: cover;
            }
        }
        small {
            color: #666;
        }
        a {
            text-decoration: none;
            h2 {
                font-size: 3.2rem;
                cursor: pointer;
                color: #000;
                strong {
                    position: relative;
                    white-space: nowrap;
                    z-index: 2;
                    &::after {
                        position: absolute;
                        content: '';
                        bottom: 0.25rem;
                        right: -0.25rem;
                        z-index: -1;
                        background: ${(props) => props.theme.colors.primary};
                        width: 5rem;
                        height: 1rem;
                    }
                }
            }
        }
        p {
            color: #666;
        }
        .pill {
            cursor: pointer;
        }
    }
    @media screen and (max-width: 1000px) {
        display: block;
        & > div {
            margin-bottom: 8.5rem;
        }
    }
`

const StyledFilter = styled.div`
    padding: 7.5rem 0rem;
    text-align: left;
    & > div {
        display: inline-block;
        cursor: pointer;
        color: #888;
        transition: all 0.25s ease-in-out;
        &:hover {
            color: #000;
        }
        &::before {
            content: '';
            padding-right: 3rem;
        }
        &:nth-child(1)::before {
            content: none;
            padding-right: 0rem;
        }
        &::after {
            content: '/';
            font-weight: normal !important;
            padding-left: 3rem;
        }
        &:nth-last-child(1)::after {
            content: none;
            padding-left: 0rem;
        }
    }
    @media screen and (max-width: 1000px) {
        & > div {
            padding: 1rem 0rem;
            &:nth-child(1) {
                padding-left: 3rem;
            }
        }
    }
`

const pieceVariant = {
    initial: {
        y: 100,
        opacity: 0,
        scale: 1.1,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.4,
        },
    },
    exit: {
        y: -10,
        opacity: 0,
        scale: 0.9,
    },
}

const Portfolio = () => {
    const [filteredList, setFilteredList] = useState(portfolio)

    const filterItem = (e) => {
        const selection = e.target.innerText
        if (selection === 'everything') {
            setFilteredList(portfolio)
        } else {
            let arr = []
            portfolio.forEach((piece) => {
                piece.category.includes(selection) && arr.push(piece)
            })
            setFilteredList(arr)
        }
    }

    const truncate = (text: string) => {
        const truncated = text.substring(0, 200) + '...learn more'
        return truncated
    }

    return (
        <StyledContainer>
            <Filter filterItem={filterItem} />
            <StyledGrid>
                {filteredList.map((piece) => {
                    return (
                        <AnimatePresence key={piece.name}>
                            <motion.div
                                variants={pieceVariant}
                                initial="initial"
                                whileInView="animate"
                                exit="exit"
                            >
                                <div className="slide">
                                    <Link href={piece.link} passHref>
                                        <img
                                            src={piece.work}
                                            alt={piece.name}
                                        />
                                    </Link>
                                </div>
                                <small>{piece.name}</small>
                                <Link href={piece.link} passHref>
                                    <a>
                                        <h2
                                            dangerouslySetInnerHTML={{
                                                __html: piece.title,
                                            }}
                                        />
                                    </a>
                                </Link>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: truncate(piece.description),
                                    }}
                                />
                                {piece.category.map((kind) => {
                                    return (
                                        <GS.PillButton
                                            key={kind}
                                            onClick={(e) => filterItem(e)}
                                            className="pill"
                                        >
                                            {kind}
                                        </GS.PillButton>
                                    )
                                })}
                            </motion.div>
                        </AnimatePresence>
                    )
                })}
            </StyledGrid>
        </StyledContainer>
    )
}

const Filter: React.FC<FilterProps> = (props) => {
    const { filterItem } = props

    const categories = [
        'everything',
        'ecommerce',
        'branding',
        'web development',
        'ux/ui',
        'smart contract development',
    ]

    return (
        <StyledFilter>
            {categories.map((category) => {
                return (
                    <div
                        key={category}
                        onClick={(e) => filterItem(e)}
                        className="categories"
                    >
                        {category}
                    </div>
                )
            })}
        </StyledFilter>
    )
}

export default Portfolio
