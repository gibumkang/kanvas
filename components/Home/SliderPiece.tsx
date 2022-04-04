import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import useWindowSize from '../../hooks/useWindowSize'

interface SliderPieceProps {
    name?: string
    id: string
}

const StyledContainer = styled.div`
    height: 65rem;
    min-width: 60rem;
    border-radius: 2rem;
    border: 0.5rem solid #999;
    position: relative;
    overflow: hidden;
    background: #333;
    @media screen and (max-width: 1000px) {
        min-width: initial;
        width: 100%;
    }
`

const slide = keyframes`
    0% {
        left: 135rem;
    }
    50% {
        left: -90rem;
    }
    100% {
        left: 135rem;
    }
`

const StyledFlex = styled(motion.div)`
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${slide} 20s ease-in-out infinite;
    & > div {
        flex: 1;
        img,
        video {
            border-radius: 1.5rem;
            border: 0.5rem solid #999;
            transition: all 0.25s ease-in-out;
            box-shadow: 0rem 0rem 3rem rgba(0, 0, 0, 0.35);
            transform: scale(0.9);
            opacity: 0.8;
            &:hover {
                transform: scale(0.95);
                opacity: 1;
            }
        }
        video {
            width: 85.5rem;
            height: auto;
            display: block;
        }
    }
`

const SliderPiece: React.FC<SliderPieceProps> = (props) => {
    const { name, id } = props
    const window = useWindowSize()
    return (
        <StyledContainer id={id}>
            <StyledFlex>
                <motion.div>
                    <img src={`/hp-${name}-1.webp`} alt="portfolio piece" />
                </motion.div>
                <motion.div>
                    {window.width > 600 ? (
                        <video autoPlay muted loop>
                            <source src="/hp-yesports.mp4" type="video/mp4" />
                        </video>
                    ) : (
                        <img src={`/hp-${name}-2.webp`} alt="portfolio piece" />
                    )}
                </motion.div>
                <motion.div>
                    <img src={`/hp-${name}-5.webp`} alt="portfolio piece" />
                </motion.div>
            </StyledFlex>
        </StyledContainer>
    )
}

export default SliderPiece
