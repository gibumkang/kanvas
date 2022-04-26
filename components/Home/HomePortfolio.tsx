import React from 'react'
import * as GS from '../../styles/global'
import styled from 'styled-components'
import Intro from './Intro'
import { portfolio } from '../../data/portfolio'
import Link from 'next/link'
import Piece from './Piece'
import { motion } from 'framer-motion'
import { BsArrowRightCircle } from 'react-icons/bs'

interface PortfolioComponentProps {
    name: string
    title: string
    link: string
    technology: string[]
    categories: string[]
    slug?: string
}

const StyledFlex = styled.div`
    gap: 20rem;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    & > div {
        flex: 1;
        margin: 20rem auto;
        h3 {
            font-size: 1.6rem;
            color: #888;
        }
        p {
            font-size: 3.2rem;
            strong {
                position: relative;
                white-space: nowrap;
                z-index: 2;
                &::after {
                    position: absolute;
                    content: '';
                    bottom: 0.3rem;
                    right: -0.3rem;
                    z-index: -1;
                    background: ${(props) => props.theme.colors.primary};
                    width: 5rem;
                    height: 1rem;
                }
            }
        }
    }
    @media screen and (max-width: 1200px) {
        gap: 10rem;
    }
    @media screen and (max-width: 1000px) {
        display: block;
        & > div {
            margin: 0 auto;
        }
        .content {
            margin: 2rem auto 10rem auto;
        }
    }
`

const StyledPillContainer = styled.div`
    margin-top: 1.5rem;
`

const pieceVariant = {
    initial: {
        opacity: 0,
        rotate: 5,
        scale: 0.85,
        y: 100,
    },
    animate: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
}

const ButtonContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10rem;
    .button {
        font-size: 3rem;
        padding: 0.5rem 3.5rem;
        svg {
            position: relative;
            bottom: 0.3rem;
            font-size: 2.3rem;
            left: 0.25rem;
        }
    }
`

const HomePortfolio: React.FC = () => {
    let homePortfolio = portfolio.slice(0, 5)
    return (
        <GS.MaxContainer>
            <Intro />
            {homePortfolio.map((piece) => {
                return (
                    <div key={piece.name}>
                        <PortfolioComponent
                            name={piece.name}
                            title={piece.title}
                            link={piece.link}
                            technology={piece.technology}
                            categories={piece.category}
                            slug={piece.slug}
                        />
                    </div>
                )
            })}
            <ButtonContainer>
                <Link passHref href="/work">
                    <GS.MainButton className="button">
                        see all work <BsArrowRightCircle />
                    </GS.MainButton>
                </Link>
            </ButtonContainer>
        </GS.MaxContainer>
    )
}

const PortfolioComponent: React.FC<PortfolioComponentProps> = (props) => {
    const { name, title, link, categories, slug } = props
    return (
        <StyledFlex>
            <motion.div
                variants={pieceVariant}
                initial="initial"
                whileInView="animate"
            >
                <Piece name={slug} />
            </motion.div>
            <div className="content">
                <h3>{name}</h3>
                <p dangerouslySetInnerHTML={{ __html: title }} />
                <Link href={link} passHref>
                    <GS.MainButton>see case study</GS.MainButton>
                </Link>
                <StyledPillContainer>
                    {categories.map((category) => {
                        return (
                            <GS.PillButton key={category}>
                                {category}
                            </GS.PillButton>
                        )
                    })}
                </StyledPillContainer>
            </div>
        </StyledFlex>
    )
}

export default HomePortfolio
