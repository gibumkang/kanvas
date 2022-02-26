import styled from 'styled-components'
import CheckMarkBullet from '../../../GeneralPurposeComponents/CheckMarkBullet/CheckMarkBullet'
import ThreeToTwoContainer from '../../../GeneralPurposeComponents/ThreeToTwoContainer/ThreeToTwoContainer'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'
import YellowUnderlineTitle from '../../../GeneralPurposeComponents/YellowUnderlineTitle'

export const Placeholder = styled.div`
    background-color: #fff;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 0 10%;
`

export const FormattedP = styled.p`
    color: #fff;

`

const Section1 = () => {
    const paragraph =
        'Our marketing engine will continuously drive quality trial and sales of your product.Through partnering with local distributors and exclusive venues, we drive significant revenue from the marketing of these spirits across multiple channels. Our RYS team will:'

    const bullets = [
        'Conduct on and offpremise product sampling opportunities at exclusive venues',
        'Offer in-home spirits pairings with culinary offerings to drive direct sales',
        'Develop menu branding at select venues',
        'Create on-premise spirits sales and cocktail programs',
        'Develop behind bar shelf merchandising platform',
    ]

    return (
        <ThreeToTwoContainer left={false}>
            <Placeholder />
            <FlexContainer>
                <YellowUnderlineTitle
                    title="FOR SPIRITS SUPPLIERS"
                    left={true}
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
        </ThreeToTwoContainer>
    )
}

export default Section1
