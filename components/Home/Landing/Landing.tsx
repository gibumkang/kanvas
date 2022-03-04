import styled from 'styled-components'
import * as GS from '../../../styles/global'

const ButtonWithExtraEffects = styled(GS.StyledButton)`
    margin-top: 3rem;
    cursor: pointer;
`

const Container = styled.div`
    width: 100%;
    background: #000;
`

const StyledFlex = styled.div`
    display: flex;
    padding: 25rem 4rem;
    margin: 0 auto;
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

const Landing = () => {
    return (
        <Container>
            <StyledFlex>
                <CenterOnMobile>
                    <MobileH1>Raise Your Spirits</MobileH1>
                    <MobileH2>
                        <em>
                            Creating environments to build lasting relationships
                        </em>
                    </MobileH2>
                    <MobileButtonWrapper>
                        <ButtonWithExtraEffects>
                            Our <strong>Services</strong>
                        </ButtonWithExtraEffects>
                    </MobileButtonWrapper>
                </CenterOnMobile>
            </StyledFlex>
        </Container>
    )
}

export default Landing
