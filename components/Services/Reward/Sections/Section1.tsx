import styled from 'styled-components'

import ThreeToTwoContainer from '../../../GeneralPurposeComponents/ThreeToTwoContainer/ThreeToTwoContainer'
import { FormattedP } from '../../Extend/Sections/Section1'

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const FormattedH3 = styled.div`
    color: gold;
`

const UpdatedP = styled(FormattedP)`
    padding-right: 20%;
`

const Paragraph = ({ title, text }) => {
    return (
        <div>
            <FormattedH3>{title}</FormattedH3>
            <UpdatedP>{text}</UpdatedP>
        </div>
    )
}

const Section1 = () => {
    const content = {
        p1: {
            title: 'FINE SPIRITS',
            paragraph:
                'Let us be your spirits concierge to source some of the finest spirits to offer as gifts for your top clients or top employees. We will leverage our network of global supplier partners to find the perfect expressions for your top performers.',
        },
        p2: {
            title: 'GLASSWARE AND BAR WARE',
            paragraph:
                'Let us be your partner in providing quality glassware and bar ware to compliment your spirits experience. Our weighted rocks glass is always a client favorite. The sensory effect of the glass in your hand contributes greatly to the spirits experience.',
        },
    }

    return (
        <ThreeToTwoContainer>
            <div></div>
            <ContentContainer>
                <Paragraph
                    title={content.p1.title}
                    text={content.p1.paragraph}
                />
                <Paragraph
                    title={content.p2.title}
                    text={content.p2.paragraph}
                />
            </ContentContainer>
        </ThreeToTwoContainer>
    )
}

export default Section1
