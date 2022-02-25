import styled from 'styled-components'
import MinFullPage from '../../../GeneralPurposeComponents/MinFullPage'
import YellowLetteringParagraph from '../../../GeneralPurposeComponents/YellowLetteringParagraph'

const FormattedH3 = styled.h3`
    text-align: center;
    padding: 50px;
`

const Page = styled(MinFullPage)`
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
`

const FormattedParagraph = styled.p`
    padding: 0 10%;
    color: #fff;
`

const Section3 = () => {
    const textBlock1 =
        'Guests are welcomed to the virtual platform and guided through the tasting of up to three spirits expressions. RYS looks to source lesser known and/or rare fine spirits. The dialogue will introduce participants to the origins and elements of every expression using ou proprietary “Get HIP” approach (H-History; I- Ingredients; P-Process).'

    const textBlock2 =
        'Everyone is able to interact and ask questions. The typical experience lasts 1-1 ½ hours. Best of all, your guests get to keep their bottles as gifts from you. (Note: Responsibl drinking is a core part of our philosophy. Even though guests are at home, we will require small pours a we walk through the experience.) Last, but certainly not least, we can shape the tasting conten to align with certain themes specific to your company’s value proposition, or we can conduct  purely spirits-focused experience.'

    const textBlock3 =
        'How much will it cost? That depends upon the number of guests you invite and the type/price of spirits. We recommend each participant receive three expressions, but it’ completely up to you.'

    return (
        <Page>
            <FormattedH3>WHAT IS THE EXPERIENCE?</FormattedH3>
            <YellowLetteringParagraph text={textBlock1} />
            <FormattedParagraph>{textBlock2}</FormattedParagraph>
            <YellowLetteringParagraph text={textBlock3} numberOfWords={5} />
        </Page>
    )
}

export default Section3
