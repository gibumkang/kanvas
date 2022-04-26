import React from 'react'
import styled from 'styled-components'
import { services } from '../../data/services'
import { motion } from 'framer-motion'
import Link from 'next/link'

const StyledFlex = styled.div`
    gap: 5rem;
    display: flex;
    padding: 20rem 0rem;
    & > div {
        h2 {
            font-size: 3.2rem;
            color: #000;
        }
        p,
        a {
            font-size: 2.1rem;
            color: #555;
        }
        &.line {
            width: 0.1rem;
            background: #000;
        }
        &:nth-child(1),
        &:nth-child(3) {
            flex: 1;
        }
    }
    @media screen and (max-width: ${(props) => props.theme.midWidth}) {
        display: block;
        & > div {
            padding: 3rem 0rem;
            &.line {
                display: none;
            }
        }
    }
    @media screen and (max-width: 500px) {
        padding: 10rem 0rem;
    }
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    & > div {
        text-align: center;
        img {
            width: 6rem;
            height: auto;
            filter: invert(63%) sepia(91%) saturate(1648%) hue-rotate(1deg)
                brightness(105%) contrast(106%);
            position: relative;
        }
    }
    @media screen and (max-width: 1000px) {
        margin-bottom: 20rem;
    }
    @media screen and (max-width: 500px) {
        margin-bottom: 10rem;
        grid-gap: 1.5rem;
        & > div {
            p {
                font-size: 1.3rem;
                padding-top: 0.5rem;
            }
        }
    }
`

const Intro = () => {
    return (
        <>
            <div id="intro">&nbsp;</div>
            <StyledFlex>
                <div>
                    <h2>our mission</h2>
                    <p>
                        To create a digital presence empowered by design,
                        research, and experience. We provide a <em>turnkey</em>{' '}
                        solution for all your digital needs.
                    </p>
                </div>
                <div className="line">&nbsp;</div>
                <div>
                    <h2>our services</h2>
                    <p>
                        Whether you are looking to launch an online store or
                        your very own NFT collection, <em>we can help</em>. See
                        our{' '}
                        <Link passHref href="/faq">
                            <a>faq</a>
                        </Link>{' '}
                        page for details.
                    </p>
                </div>
            </StyledFlex>
            <StyledGrid>
                {services.map((service) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5 },
                            }}
                            whileHover={{
                                scale: 1.1,
                            }}
                            key={service.description}
                        >
                            <img
                                src={service.source}
                                alt={service.description}
                            />
                            <p>{service.description}</p>
                        </motion.div>
                    )
                })}
            </StyledGrid>
        </>
    )
}

export default Intro
