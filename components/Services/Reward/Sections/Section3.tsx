import styled from 'styled-components'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
`

const Title = styled.h3`
    color: #fff;
    text-align: center;
`

const DoubleGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Section3 = () => {
    const text =
        'This is an opportunity to purchase exclusive access to taste, select, and own bourbon some of the finest barrels of bourbon available today. Your Select Barrel Series is a selection of single barrels of Knob Creek Kentucky straight bourbon pulled expressly for you to experience and own. Each barrel has its own unique flavor profile and represents bourbon that will never be available again once each barrel is purchased. Each bottle from this barrel will have a custom placard on it with your desired wording and will be signed by Fred Noe (Jim Beam’s Great Great Grandson). Perfect for team or client gifts.'

    return (
        <Container>
            <Title>OWN A BARREL</Title>
            <DoubleGrid>
                <YellowLetteringParagraph text={text} />
            </DoubleGrid>
        </Container>
    )
}

export default Section3
