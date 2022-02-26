import styled from 'styled-components'
import CircleCircleBullet from '../../../GeneralPurposeComponents/CircleCircleBullet/CircleCircleBullet'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
`

const FormattedH3 = styled.h3`
    text-align: center;
    padding: 70px;
`

const BulletsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 100px;
    max-width: min(80vw, 1900px);
`
const FormattedP = styled.p`
    color: #fff;
    padding: 0 35px;
`

const Section2 = () => {
    const textBlocks = [
        'We collaborate with you to select the spirits category you would like to present, then we source and purchase recommended expressions. Any distilled spirit is fair game (We can source expressions ranging from $40-$3,000)',
        'We coordinate delivery of each expression to each experience participant at their homes or other designated location (We recommend allocating at least 10 days for delivery)',
        'An RYS host conducts the experience via an agreed upon videoconferencing platform (standard $700 experience fee)',
        'After the experience we provide you with a follow up email with the tasting notes to share with your guests',
    ]

    return (
        <Container>
            <FormattedH3>HOW IT WORKS</FormattedH3>
            <BulletsContainer>
                {textBlocks.map((text, index) => (
                    <CircleCircleBullet index={index + 1}>
                        <FormattedP>{text}</FormattedP>
                    </CircleCircleBullet>
                ))}
            </BulletsContainer>
        </Container>
    )
}

export default Section2
