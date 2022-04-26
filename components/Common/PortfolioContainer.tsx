import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Portfolio, Testimonial } from '../../data/portfolio'

interface PortfolioContainerProps {
    portfolio: Portfolio[]
    testimonials?: Testimonial[]
    alt: string
}

const StyledContainer = styled.div`
    max-width: 140rem;
    margin: 0 auto;
`

const StyledImageContainer = styled(motion.div)`
    padding-bottom: 15rem;
    img,
    video {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 1.5rem;
        border: 0.5rem solid #ccc;
    }
    .content {
        text-align: center;
        padding: 1.5rem 3rem 0rem 3rem;
        p {
            color: #555;
        }
    }
    @media screen and (max-width: 1400px) {
        padding-bottom: 7.5rem;
        img,
        video {
            border-top: 0.5rem solid #ccc;
            border-bottom: 0.5rem solid #ccc;
            border-radius: 0;
        }
    }
`

const StyledTestimonial = styled.div`
    border-top: 0.1rem solid #eee;
    padding: 3rem;
    border-bottom: 0.1rem solid #eee;
    display: flex;
    max-width: 90rem;
    gap: 3rem;
    margin: 0 auto 20rem auto;
    align-items: center;
    & > div {
        &:nth-child(1) {
            width: 17.5rem;
        }
        &:nth-child(2) {
            width: 25rem;
        }
        &:nth-child(3) {
            flex: 1;
        }
        h3 {
            font-size: 2.4rem;
            color: #000;
        }
        h4 {
            font-size: 1.9rem;
            color: #555;
            font-weight: normal;
        }
        img {
            width: 17.5rem;
            height: 17.5rem;
            display: block;
            border-radius: 50%;
            border: 0.1rem solid #eee;
        }
        p {
            font-size: 1.8rem;
            position: relative;
            :before {
                content: '"';
                position: absolute;
                font-size: 3rem;
                left: -1.5rem;
                top: -1rem;
                font-family: serif;
            }
            :after {
                content: '"';
                position: relative;
                font-size: 3rem;
                right: -0.25rem;
                line-height: 0rem;
                font-family: serif;
            }
        }
    }
    @media screen and (max-width: 740px) {
        display: block;
        & > div {
            text-align: center;
            &:nth-child(1) {
                width: 100%;
            }
            &:nth-child(2) {
                width: 100%;
            }
            &:nth-child(3) {
                width: 100%;
            }
            img {
                margin: 0 auto;
            }
        }
    }
`

const PortfolioContainer: React.FC<PortfolioContainerProps> = (props) => {
    const { portfolio, testimonials, alt } = props
    return (
        <StyledContainer>
            {portfolio.map((piece) => {
                return (
                    <StyledImageContainer
                        key={piece.caption}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: { duration: 1 },
                        }}
                        viewport={{ once: true }}
                    >
                        {piece.video ? (
                            <video autoPlay muted loop playsInline>
                                <source src={piece.source} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={piece.source} alt={alt} />
                        )}
                        <div
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: piece.caption,
                            }}
                        />
                    </StyledImageContainer>
                )
            })}
            {testimonials && (
                <StyledTestimonial>
                    <div>
                        <img
                            src={testimonials[0].photo}
                            alt={testimonials[0].name}
                        />
                    </div>
                    <div>
                        <h3>{testimonials[0].name}</h3>
                        <h4>{testimonials[0].title}</h4>
                    </div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: testimonials[0].testimonial,
                            }}
                        />
                    </div>
                </StyledTestimonial>
            )}
        </StyledContainer>
    )
}

export default PortfolioContainer
