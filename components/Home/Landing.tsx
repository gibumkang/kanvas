import styled from 'styled-components'

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
    padding: 3rem;
    margin: 0 auto;
    align-items: center;
    height: 100vh;
    max-width: ${(props) => props.theme.maxWidth};
    h1 {
        font-size: 6rem;
        font-weight: 300;
    }
    h2 {
        font-size: 4rem;
        color: ${(props) => props.theme.colors.primary};
    }
    @media screen and (max-width: ${(props) => props.theme.midWidth}){
        h1 {
            font-size: 3.2rem;
        }
        h2 {
            font-size: 2.4rem;
        }
    }
`

const Landing = () => {
    return (
        <Container>
            <StyledVideo>
                <video autoPlay muted loop>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </StyledVideo>
            <StyledFlex>
                <div>
                    <h2>welcome</h2>
                    <h1>
                        Kanvas is web agency that focuses on
                        branding, ecommerce, and web3.
                    </h1>
                </div>
            </StyledFlex>
        </Container>
    )
}

export default Landing
