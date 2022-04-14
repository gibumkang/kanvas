import React from 'react'
import styled from 'styled-components'
import {motion, useViewportScroll} from 'framer-motion'
import { HeaderProps, Portfolio, Testimonial } from '../../data/portfolio'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import useWindowSize from '../../hooks/useWindowSize'
import { meta } from '../../data/meta'

interface PortfolioProps {
    description: string
    technology: string[]
    portfolio: Portfolio[]
    testimonials?: Testimonial[]
    alt: string
    header: HeaderProps[]
    slug: string
}

const responsive = 900

const StyledHero = styled(motion.div)`
    height: 70rem;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: linear-gradient(0deg, rgba(249,171,0,1) 0%, rgba(249,255,0,1) 100%);
    video {
        width: 100%;
        height: auto;
        margin: 0 auto;
        position: absolute;
        z-index: 1;
        top: 0rem;
    }
    .header-image {
        width: 100%;
        position: relative;
        z-index: 1;
    }
    .logo {
        position: absolute;
        max-width: 51rem;
        height: auto;
        filter: brightness(0) invert(1);
        bottom: 0rem;
        z-index: 0;
    }
    @media screen and (max-width: ${responsive}px){
        background: none;
        height: auto;
        .logo {
            display: none;
        }
        video {
            position: relative;
        }
    }
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
    const {description, technology, slug, portfolio, testimonials, alt, header} = props
    const window = useWindowSize()

    return (
    <>
        <StyledHero className={slug} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}>
            <Controller>
                <Scene triggerElement={`.${slug}`} duration={window.width > responsive ? 3000 : 0}>
                    <Tween to={{ y: window.width > responsive ? '-100vh' : 0 }}>
                        {header[0].video ? (
                            <video autoPlay muted loop playsInline>
                                <source src={header[0].source} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={header[0].source} alt={alt} className="header-image" />
                        )}
                    </Tween>
                </Scene>
            </Controller>
            <motion.img
                src="/logo-k.svg"
                alt={meta[0].name}
                className="logo"
            />
        </StyledHero>
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