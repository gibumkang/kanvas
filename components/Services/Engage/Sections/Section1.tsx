import styled from 'styled-components'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'
import YellowUnderlineTitle from '../../../GeneralPurposeComponents/YellowUnderlineTitle'

const FullPageSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 50vh;
    place-items: stretch;
`

const PlaceHolder = styled.div`
    background-color: hsl(31, 35%, 51%);
`

const Section1_2 = styled.div`
    background-color: hsl(175, 44%, 15%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Section1 = () => {

    const text = "We are living in uncertain times, but one thing you should be certain of is that you can continue to build and maintain quality business relationships even in this era of social distancing. As you look for ways to engage your prospects and customers, let Raise Your Spirits be your partner in reshaping your business development plan by delivering engaging sensory engagement platforms in the midst of the new normal."

    return (
        <FullPageSection>
            <PlaceHolder>hi</PlaceHolder>
            <Section1_2>
                <YellowUnderlineTitle
                    title="UNFORGETTABLE EXPERIENCES"
                    left={true}
                />
                <YellowLetteringParagraph
                    text={text}
                />
            </Section1_2>
        </FullPageSection>
    )
}

export default Section1
