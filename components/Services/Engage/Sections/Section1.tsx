import styled from 'styled-components'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'
import YellowUnderlineTitle from '../../../GeneralPurposeComponents/YellowUnderlineTitle'

export const FullPageSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 940px) {
        grid-template-columns: 1fr;
    }
`

const PlaceHolder = styled.div`
    background: url('/services-pouring.webp') no-repeat top;
    background-size: cover;
    min-height: 50vh;
`

export const ContentSection = styled.div`
    background-color: hsl(175, 44%, 15%);
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 50px 0;
    justify-content: center;
`

const ParagraphWrapper = styled.div`
    max-width: 80rem;
    margin: 0 auto;
`

const Section1 = () => {
    const text =
        'We are living in uncertain times, but one thing you should be certain of is that you can continue to build and maintain quality business relationships even in this era of social distancing. As you look for ways to engage your prospects and customers, let Raise Your Spirits be your partner in reshaping your business development plan by delivering engaging sensory engagement platforms in the midst of the new normal.'

    return (
        <FullPageSection>
            <PlaceHolder>&nbsp;</PlaceHolder>
            <ContentSection>
                <YellowUnderlineTitle
                    title="UNFORGETTABLE EXPERIENCES"
                    left={true}
                />
                <ParagraphWrapper><YellowLetteringParagraph text={text} /></ParagraphWrapper>
            </ContentSection>
        </FullPageSection>
    )
}

export default Section1
