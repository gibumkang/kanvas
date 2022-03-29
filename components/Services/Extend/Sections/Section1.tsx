import styled from 'styled-components'
import CheckMarkBullet from '../../../GeneralPurposeComponents/CheckMarkBullet/CheckMarkBullet'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'
import YellowUnderlineTitle from '../../../GeneralPurposeComponents/YellowUnderlineTitle'

export const Container = styled.div`
    display: grid;
    background-color: #000;
    padding: 100px 50px;
    min-height: min(1000px, 100vh);
`
const RightContainer = styled(Container)`
    grid-template-columns: 2fr 3fr;
    grid-template-areas:
        'image title'
        'image content';
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

export const Placeholder = styled.div`
    grid-area: image;
    min-width: 40vw;
    background: url('/wine.webp') no-repeat center;
    background-size: cover;
    &.car {
        background: url('/supercar.webp') no-repeat center;
        background-size: cover;
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 40vh;
    }
`
export const Title = styled.div`
    grid-area: title;
`

export const Content = styled.div`
    grid-area: content;
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        p {
            padding: 0rem;
        }
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 3rem 5rem;
    max-width: 80rem;
    margin: 0 auto;
    @media only screen and (max-width: 940px) {
        grid-template-columns: unset;
        display: flex;
        flex-direction: column;
    }
`

export const FormattedP = styled.p`
    color: #fff;
    @media only screen and (max-width: 768px) {
        text-align: left;
    }
`

const StyledWrapper = styled.div`
    @media screen and (max-width: 1550px){
        padding: 3rem 0rem;
    }
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
        <RightContainer>
            <Placeholder />
            <Title>
                <YellowUnderlineTitle
                    title="FOR SPIRITS SUPPLIERS"
                    left={true}
                />
            </Title>
            <Content>
                <StyledWrapper><YellowLetteringParagraph text={paragraph} /></StyledWrapper>
                <GridContainer>
                    {bullets.map((bullet) => (
                        <CheckMarkBullet key={bullet}>
                            <FormattedP>{bullet}</FormattedP>
                        </CheckMarkBullet>
                    ))}
                </GridContainer>
            </Content>
        </RightContainer>
    )
}

export default Section1
