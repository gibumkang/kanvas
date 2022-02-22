import styled from 'styled-components'
import * as GS from '../../../styles/global'

const ButtonWithExtraEffects = styled(GS.StyledButton)`
    cursor: pointer;
`

const Landing = () => {
    return (
        <div>
            <h1>Raise Your Spirits</h1>
            <h2><em>Creating environments to build lasting relationships</em></h2>
            <ButtonWithExtraEffects>
                Our <strong>Services</strong>
            </ButtonWithExtraEffects>
        </div>
    )
}

export default Landing
