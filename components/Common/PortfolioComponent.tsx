import React, { Suspense, lazy } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { HeaderProps, Portfolio, Testimonial } from '../../data/portfolio'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import useWindowSize from '../../hooks/useWindowSize'
import { meta } from '../../data/meta'
import PortfolioContainer from './PortfolioContainer'

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
    background: linear-gradient(
        0deg,
        rgba(249, 171, 0, 1) 0%,
        rgba(249, 255, 0, 1) 100%
    );
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
    @media screen and (max-width: ${responsive}px) {
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
                content: ', ';
            }
            &:nth-last-child(1) {
                &::after {
                    content: none;
                }
            }
        }
    }
`

const MainPortfolioComponent = lazy(() => import('./PortfolioContainer'))

const PortfolioComponent: React.FC<PortfolioProps> = (props) => {
    const {
        description,
        technology,
        slug,
        portfolio,
        testimonials,
        alt,
        header,
    } = props
    const window = useWindowSize()

    return (
        <>
            <StyledHero
                className={slug}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
                <Controller>
                    <Scene
                        triggerElement={`.${slug}`}
                        duration={window.width > responsive ? 3000 : 0}
                    >
                        <Tween
                            to={{ y: window.width > responsive ? '-100vh' : 0 }}
                        >
                            {header[0].video ? (
                                <video autoPlay muted loop playsInline>
                                    <source
                                        src={header[0].source}
                                        type="video/mp4"
                                    />
                                </video>
                            ) : (
                                <img
                                    src={header[0].source}
                                    alt={alt}
                                    className="header-image"
                                />
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
                            return <li key={tech}>{tech}</li>
                        })}
                    </ul>
                </StyledContent>
            </StyledContainer>
            <MainPortfolioComponent
                portfolio={portfolio}
                testimonials={testimonials}
                alt={alt}
            />
            <Suspense fallback={<div>Loading...</div>} />
        </>
    )
}

export default PortfolioComponent
