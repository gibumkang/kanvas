import styled from 'styled-components'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: url('/services-rewards-barrel.webp') no-repeat center;
    background-size: cover;
    @media screen and (max-width: 768px){
        box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.8);
    }
`

const Title = styled.h3`
    color: #fff;
    text-align: center;
    padding: 15rem 0rem;
    @media only screen and (max-width: 768px) {
        padding: 7.5rem 0rem;
    }
`

const DoubleGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-grow: 1;
    .center-text {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 20%;
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: unset;
        display: flex;
        flex-direction: column;
        .center-text {
            padding-bottom: 0;
            justify-content: unset;
            min-height: unset;
            order: 1;
        }
    }
`

const StyledWrapper = styled.div`
    @media screen and (max-width: 768px){
        padding: 5rem 0rem;
    }
`

const Section3 = () => {
    const text =
        'This is an opportunity to purchase exclusive access to taste, select, and own bourbon some of the finest barrels of bourbon available today. Your Select Barrel Series is a selection of single barrels of Knob Creek Kentucky straight bourbon pulled expressly for you to experience and own. Each barrel has its own unique flavor profile and represents bourbon that will never be available again once each barrel is purchased. Each bottle from this barrel will have a custom placard on it with your desired wording and will be signed by Fred Noe (Jim Beam’s Great Great Grandson). Perfect for team or client gifts.'

    return (
        <Container>
            <Title>OWN A BARREL</Title>
            <DoubleGrid>
                <div className="center-text">
                    <StyledWrapper><YellowLetteringParagraph text={text} /></StyledWrapper>
                </div>
            </DoubleGrid>
        </Container>
    )
}

export default Section3
