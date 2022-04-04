import React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import { motion } from 'framer-motion'
import useWindowSize from '../../hooks/useWindowSize'

interface XPieceProps {
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
    background: #eee;
    @media screen and (max-width: 1000px) {
        min-width: initial;
        width: 100%;
    }
`

const StyledWrapper = styled.div`
    display: block;
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translate(-50%, -50%);
    .flex {
        display: flex;
        width: 100%;
        & > div {
            flex: 1;
            padding: 0rem 3rem;
            img,
            video {
                width: 60rem;
                height: 40rem;
                object-fit: cover;
                margin: 3rem auto;
                border-radius: 1.5rem;
                box-shadow: 0rem 0rem 3rem rgba(0, 0, 0, 0.35);
                transition: all 0.25s ease-in-out;
            }
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
`

const StyledWives = styled.div`
    display: block;
    position: absolute;
    left: -100%;
    top: 50%;
    transform: translate(0%, -50%);
    .flex {
        display: flex;
        width: 100%;
        & > div {
            &:nth-child(1) {
                position: relative;
            }
            img {
                height: 35rem;
                width: auto;
                margin: 0rem auto;
                transition: all 0.25s ease-in-out;
            }
        }
    }
`

const xVariant = {
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
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
}

const Content: React.FC<XPieceProps> = (props) => {
    const { name } = props
    const window = useWindowSize()
    const trigger = (name: string) => {
        if (name === 'evercast') return '#intro'
        if (name === 'pastelwives') return '#tylv'
        if (name === 'streeth') return '#yesports'
    }

    return (
        <Controller>
            <Scene triggerElement={trigger(name)} duration={2500}>
                <Tween to={{ x: '20vw' }}>
                    <motion.div
                        className="flex"
                        variants={xVariant}
                        initial="initial"
                        whileInView="animate"
                    >
                        <motion.div variants={imgVariant}>
                            <img
                                src={`/hp-${name}-1.webp`}
                                alt="portfolio piece"
                            />
                        </motion.div>
                        {name === 'evercast' && (
                            <motion.div variants={imgVariant}>
                                {window.width > 600 ? (
                                    <video autoPlay muted loop>
                                        <source
                                            src="/hp-evercast.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                ) : (
                                    <img
                                        src={`/hp-${name}-2.webp`}
                                        alt="portfolio piece"
                                    />
                                )}
                            </motion.div>
                        )}
                        {name === 'streeth' && (
                            <motion.div variants={imgVariant}>
                                {window.width > 600 ? (
                                    <video autoPlay muted loop>
                                        <source
                                            src="/hp-streeth.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                ) : (
                                    <img
                                        src={`/hp-${name}-2.webp`}
                                        alt="portfolio piece"
                                    />
                                )}
                            </motion.div>
                        )}
                        {name != 'pastelwives' && (
                            <motion.div variants={imgVariant}>
                                <img
                                    src={`/hp-${name}-5.webp`}
                                    alt="portfolio piece"
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </Tween>
            </Scene>
            <Scene triggerElement={trigger(name)} duration={2500}>
                <Tween to={{ x: '-20vw' }}>
                    <motion.div
                        className="flex"
                        variants={xVariant}
                        initial="initial"
                        whileInView="animate"
                    >
                        <motion.div variants={imgVariant}>
                            <img
                                src={`/hp-${name}-2.webp`}
                                alt="portfolio piece"
                            />
                        </motion.div>
                        {name != 'pastelwives' && (
                            <>
                                <motion.div variants={imgVariant}>
                                    <img
                                        src={`/hp-${name}-3.webp`}
                                        alt="portfolio piece"
                                    />
                                </motion.div>
                                <motion.div variants={imgVariant}>
                                    <img
                                        src={`/hp-${name}-4.webp`}
                                        alt="portfolio piece"
                                    />
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                </Tween>
            </Scene>
        </Controller>
    )
}

const XPiece: React.FC<XPieceProps> = (props) => {
    const { name, id } = props
    return (
        <StyledContainer id={id}>
            {name === 'evercast' && (
                <StyledWrapper>
                    <Content {...props} />
                </StyledWrapper>
            )}
            {name === 'pastelwives' && (
                <StyledWives>
                    <Content {...props} />
                </StyledWives>
            )}
            {name === 'streeth' && (
                <StyledWrapper>
                    <Content {...props} />
                </StyledWrapper>
            )}
        </StyledContainer>
    )
}

export default XPiece
