import styled from 'styled-components'
import * as GS from '../../../../../../styles/global'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
        font-size: 2.2rem;
    }
`

export const ButtonWithExtraEffects = styled(GS.StyledButton)`
    margin-top: 3rem;
    cursor: pointer;
    border-radius: 10px;
`

const FormattedImage = styled.img`
    border-radius: 1rem;
    margin-bottom: 3rem;
    max-width: 27rem;
    height: auto;
`

const Card = (props) => {
    const {src, text, link, btnText} = props
    return (
        <CardContainer>
            <FormattedImage src={src} />
            <h4>{text}</h4>
            <a href={link} target="_blank"><ButtonWithExtraEffects>{btnText ? btnText : 'Read More'}</ButtonWithExtraEffects></a>
        </CardContainer>
    )
}

export default Card
