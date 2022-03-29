import styled from 'styled-components'
import * as GS from '../../../styles/global'
import {motion} from 'framer-motion'
import Link from 'next/link'

const ButtonWithExtraEffects = styled(GS.StyledButton)`
    margin-top: 3rem;
    cursor: pointer;
`

const Container = styled.div`
    width: 100%;
    position: relative;
    z-index: 1;
`

const StyledVideo = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
`

const StyledFlex = styled.div`
    display: flex;
    padding: 25rem 4rem;
    margin: 0 auto;
    align-items: center;
    height: 100vh;
    max-width: ${(props) => props.theme.maxWidth};
    h2 {
        font-size: 2.4rem;
    }
`

const CenterOnMobile = styled.div`
    display: flex;
    flex-direction: column;
`

const MobileButtonWrapper = styled.div`
    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

const MobileH1 = styled.h1`
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const MobileH2 = styled.h2`
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const copyVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.5,
        }
    }
}

const buttonVariant = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 2.5,
        }
    }
}

const Landing = () => {
    return (
        <Container>
            <StyledVideo>
                <video autoPlay muted loop>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </StyledVideo>
            <StyledFlex>
                <CenterOnMobile>
                    <motion.div variants={copyVariant} initial="initial" animate="animate">
                        <MobileH1>Raise Your Spirits</MobileH1>
                        <MobileH2>
                            <em>
                                Creating environments to build lasting relationships
                            </em>
                        </MobileH2>
                    </motion.div>
                    <motion.div variants={buttonVariant} initial="initial" animate="animate">
                        <MobileButtonWrapper>
                            <Link href="/services">
                                <ButtonWithExtraEffects>
                                    Our <strong>Services</strong>
                                </ButtonWithExtraEffects>
                            </Link>
                        </MobileButtonWrapper>
                    </motion.div>
                </CenterOnMobile>
            </StyledFlex>
        </Container>
    )
}

export default Landing
