import styled from 'styled-components'
import CheckMarkBullet from '../../../GeneralPurposeComponents/CheckMarkBullet/CheckMarkBullet'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'
import YellowUnderlineTitle from '../../../GeneralPurposeComponents/YellowUnderlineTitle'
import {
    GridContainer,
    Placeholder,
    FormattedP,
    Container,
    Title,
    Content,
} from './Section1'

const LeftContainer = styled(Container)`
    grid-template-columns: 3fr 2fr;
    grid-template-areas:
        'title image'
        'content image';
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'title'
            'image'
            'content';
        place-items: center;
        gap: 20px;
        padding: 50px 30px;
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
        <LeftContainer>
            <Placeholder />
            <Title>
                <YellowUnderlineTitle
                    title="FOR CRAFT AND LUXURY BRANDS..."
                    left={false}
                />
            </Title>
            <Content>
                <YellowLetteringParagraph text={paragraph} />
                <GridContainer>
                    {bullets.map((bullet) => (
                        <CheckMarkBullet>
                            <FormattedP>{bullet}</FormattedP>
                        </CheckMarkBullet>
                    ))}
                </GridContainer>
            </Content>
        </LeftContainer>
    )
}

export default Section2
