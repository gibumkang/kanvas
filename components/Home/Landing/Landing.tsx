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

const Landing = () => {
    return (
        <Container>
            <StyledFlex>
                <div>
                    <h1>Raise Your Spirits</h1>
                    <h2>
                        <em>
                            Creating environments to build lasting relationships
                        </em>
                    </h2>
                    <ButtonWithExtraEffects>
                        Our <strong>Services</strong>
                    </ButtonWithExtraEffects>
                </div>
            </StyledFlex>
        </Container>
    )
}

export default Landing
