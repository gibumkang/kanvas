import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Portfolio, Testimonial } from '../../data/portfolio'

interface PortfolioProps {
    description: string
    technology: string[]
    portfolio: Portfolio[]
    testimonials?: Testimonial[]
    alt: string
}

const StyledHero = styled.div`
    height: 70rem;
    width: 100%;
    background: #ccc;
`

const StyledContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`

const StyledContent = styled.div`
    padding: 5rem 3rem;
    h2 {
        font-size: 3.5rem;
        color: #000;
    }
    p {
        color: #555;
    }
    ul {
        list-style: none;
        li {
            display: inline;
            &::after {
                content: ', '
            }
            &:nth-last-child(1){
                &::after {
                    content: none;
                }
            }
        }
    }
`

const PortfolioContainer = styled.div`
    max-width: 140rem;
    margin: 0 auto;
`

const StyledImageContainer = styled(motion.div)`
    padding-bottom: 15rem;
    img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 1.5rem;
        border: .5rem solid #ccc;
    }
    .content {
        text-align: center;
        padding: 1.5rem 3rem 0rem 3rem;
        p {
            color: #555;
        }
    }
    @media screen and (max-width: 1400px){
        padding-bottom: 7.5rem;
        img {
            border: none;
            border-radius: 0;
        }
    }
`

const StyledTestimonial = styled.div`
    border-top: .1rem solid #eee;
    padding: 3rem;
    border-bottom: .1rem solid #eee;
    display: flex;
    max-width: 90rem;
    gap: 3rem;
    margin: 0 auto 20rem auto;
    & > div {
        &:nth-child(1){
            width: 17.5rem;
        }
        &:nth-child(2){
            width: 25rem;
        }
        &:nth-child(3){
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
        }
        p {
            font-size: 2rem;
        }
    }
    @media screen and (max-width: 740px){
        display: block;
        & > div {
            text-align: center;
            &:nth-child(1){
                width: 100%;
            }
            &:nth-child(2){
                width: 100%;
            }
            &:nth-child(3){
                width: 100%;
            }
            img {
                margin: 0 auto;
            }
        }
    }
`

const PortfolioComponent:React.FC<PortfolioProps> = (props) => {
    const {description, technology, portfolio, testimonials, alt} = props
    return (
    <>
        <StyledHero />
        <StyledContainer>
            <StyledContent>
                <h2>description</h2>
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </StyledContent>
            <StyledContent>
                <h2>technologies used</h2>
                <ul>
                    {technology.map((tech) => {
                        return (
                            <li key={tech}>{tech}</li>
                        )
                    })}
                </ul>
            </StyledContent>
        </StyledContainer>
        <PortfolioContainer>
            {portfolio.map((piece) => {
                return (
                    <StyledImageContainer key={piece.caption} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }} viewport={{ once: true }}>
                        {piece.video ? 'video' : <img src={piece.source} alt={alt} />}
                        <div className="content" dangerouslySetInnerHTML={{ __html: piece.caption }} />
                    </StyledImageContainer>
                )
            })}
            { testimonials && (
                <StyledTestimonial>
                    <div>
                        <img src={testimonials[0].photo} alt={testimonials[0].name} />
                    </div>
                    <div>
                        <h3>{testimonials[0].name}</h3>
                        <h4>{testimonials[0].title}</h4>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: testimonials[0].testimonial }} />
                    </div>
                </StyledTestimonial>
            )}
        </PortfolioContainer>
    </>
  )
}

export default PortfolioComponent