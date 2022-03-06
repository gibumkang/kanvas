import styled from 'styled-components'
import CheckMarkBullet from '../../../GeneralPurposeComponents/CheckMarkBullet/CheckMarkBullet'
import ThreeToTwoContainer from '../../../GeneralPurposeComponents/ThreeToTwoContainer/ThreeToTwoContainer'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'
import YellowUnderlineTitle from '../../../GeneralPurposeComponents/YellowUnderlineTitle'
import {
    GridContainer,
    Placeholder,
    FlexContainer,
    FormattedP,
} from './Section1'

const Container = styled(ThreeToTwoContainer)`
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const Section2 = () => {
    const paragraph =
        'For luxury goods or craft products, retailers that place a high value on their customers are looking for innovative ways to show appreciation for their patronage. RYS seamlessly integrates these brands into Experiences and into complementary channels for their target consumer'

    const bullets = [
        'Development of crossbranded experiences to place luxury goods and services in locations where their key demographic can have intimate exposure',
        'Enhancement of client appreciation experiences ',
        'Create on-premise spirits sales and cocktail programs',
        'Creation of private experiences integrating luxury goods',
        'Food, wine and spirits integration',
    ]

    return (
        <Container left={false}>
            <FlexContainer>
                <YellowUnderlineTitle
                    title="FOR CRAFT AND LUXURY BRANDS..."
                    left={false}
                />
                <YellowLetteringParagraph text={paragraph} />
                <GridContainer>
                    {bullets.map((bullet) => (
                        <CheckMarkBullet>
                            <FormattedP>{bullet}</FormattedP>
                        </CheckMarkBullet>
                    ))}
                </GridContainer>
            </FlexContainer>
            <Placeholder />
        </Container>
    )
}

export default Section2
