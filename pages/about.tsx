import React from 'react'
import styled from 'styled-components'
import Heading from '../components/MainLayout/Heading/Heading'
import { about } from '../data/about'
import { motion } from 'framer-motion'

const StyledContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 0rem;
`

const StyledFlex = styled.div`
    display: flex;
    padding-top: 30rem;
    align-items: center;
    & > div {
        &:nth-child(1) {
            flex: 1.25;
            position: relative;
            .title {
                margin-left: 5rem;
                padding-bottom: 5rem;
                h2 {
                    color: #000;
                    font-size: 3rem;
                    position: relative;
                    padding-left: 2rem;
                    z-index: 1;
                }
                h3 {
                    color: #333;
                    font-size: 2.1rem;
                    position: relative;
                    padding-left: 2rem;
                    z-index: 1;
                }
                img {
                    max-width: 35rem;
                    height: auto;
                    position: absolute;
                    bottom: 0rem;
                    z-index: 0;
                }
            }
        }
        &:nth-child(2) {
            flex: 1.75;
            p {
                position: relative;
                z-index: 1;
            }
        }
    }
    @media screen and (max-width: 900px) {
        display: block;
        padding: 0rem 3rem 6rem 3rem;
        border-bottom: 0.1rem solid #eee;
        & > div {
            text-align: center;
            &:nth-child(1) {
                .title {
                    margin-left: 0rem;
                    padding-bottom: 3.5rem;
                    h2 {
                        line-height: 1rem;
                    }
                    img {
                        position: relative;
                        bottom: -9rem;
                        max-width: 30rem;
                    }
                }
            }
        }
    }
`

const About = () => {
    return (
        <>
            <Heading title={'about'} description={'Meet the staff at Kanvas'} />
            <StyledContainer>
                {about.map((person) => {
                    return (
                        <StyledFlex key={person.name}>
                            <div>
                                <div className="title">
                                    <motion.img
                                        initial={{ x: -100, opacity: 0 }}
                                        whileInView={{
                                            x: 0,
                                            opacity: 1,
                                            transition: {
                                                delay: 0.5,
                                                duration: 0.5,
                                            },
                                        }}
                                        src={person.source}
                                        alt={person.name}
                                    />
                                    <h2>{person.name}</h2>
                                    <h3>{person.title}</h3>
                                </div>
                            </div>
                            <div>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: person.description,
                                    }}
                                />
                            </div>
                        </StyledFlex>
                    )
                })}
            </StyledContainer>
        </>
    )
}

export default About
