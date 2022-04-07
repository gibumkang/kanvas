import React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import { motion } from 'framer-motion'

interface YPieceProps {
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
    z-index: 1;
    @media screen and (max-width: 1000px) {
        min-width: initial;
        width: 100%;
    }
    @media screen and (max-width: 400px){
        height: 40rem;
    }
`

const StyledFlex = styled.div`
    gap: 5rem;
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    & > div {
        flex: 1;
        img {
            width: 30rem;
            height: 40rem;
            object-fit: cover;
            margin: 3rem auto;
            border-radius: 1.5rem;
            box-shadow: 0rem 0rem 3rem rgba(0, 0, 0, 0.35);
            transition: all 0.25s ease-in-out;
            opacity: 0.8;
        }
    }
    @media screen and (max-width: 1000px) {
        gap: 2.5rem;
        & > div {
            img {
                margin: 1.5rem auto;
            }
        }
    }
    @media screen and (max-width: 400px){
        & > div {
            img {
                width: 20rem;
                height: 30rem;
            }
        }
    }
`

const yVariant = {
    animate: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.25,
        },
    },
}

const imgVariant = {
    initial: {
        opacity: 0,
        scale: 0.75,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
}

const YPiece: React.FC<YPieceProps> = (props) => {
    const { name, id } = props
    return (
        <StyledContainer id={id}>
            <StyledFlex>
                <Controller>
                    <Scene
                        triggerElement={
                            name === 'tylv' ? '#evercast' : '#pastelwives'
                        }
                        duration={2500}
                    >
                        <Tween to={{ y: '30vh' }}>
                            <motion.div
                                variants={yVariant}
                                initial="initial"
                                whileInView="animate"
                            >
                                <motion.img
                                    variants={imgVariant}
                                    src={`/hp-${name}-1.webp`}
                                    alt="portfolio piece"
                                />
                                <motion.img
                                    variants={imgVariant}
                                    src={`/hp-${name}-2.webp`}
                                    alt="portfolio piece"
                                />
                                <motion.img
                                    variants={imgVariant}
                                    src={`/hp-${name}-3.webp`}
                                    alt="portfolio piece"
                                />
                            </motion.div>
                        </Tween>
                    </Scene>
                    <Scene triggerElement="#intro" duration={2500}>
                        <Tween to={{ y: '-30vh' }}>
                            <motion.div
                                variants={yVariant}
                                initial="initial"
                                whileInView="animate"
                            >
                                <motion.img
                                    variants={imgVariant}
                                    src={`/hp-${name}-6.webp`}
                                    alt="portfolio piece"
                                />
                                <motion.img
                                    variants={imgVariant}
                                    src={`/hp-${name}-4.webp`}
                                    alt="portfolio piece"
                                />
                                {name === 'tylv' && (
                                    <motion.img
                                        variants={imgVariant}
                                        src={`/hp-${name}.gif`}
                                        alt="portfolio piece"
                                    />
                                )}
                            </motion.div>
                        </Tween>
                    </Scene>
                </Controller>
            </StyledFlex>
        </StyledContainer>
    )
}

export default YPiece
