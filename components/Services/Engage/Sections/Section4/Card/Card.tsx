import styled from 'styled-components'
import * as GS from '../../../../../../styles/global'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ButtonWithExtraEffects = styled(GS.StyledButton)`
    margin-top: 3rem;
    cursor: pointer;
    border-radius: 10px;
`

const FormattedImage = styled.img`
    max-height: 300px;
    border-radius: 10px;
`

const Card = ({ src, text }) => {
    return (
        <CardContainer>
            <FormattedImage src={src} />
            <div>Image</div>
            <h4>{text}</h4>
            <ButtonWithExtraEffects>Read More</ButtonWithExtraEffects>
        </CardContainer>
    )
}

export default Card
