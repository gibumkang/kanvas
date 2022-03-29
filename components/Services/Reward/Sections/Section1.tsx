import styled from 'styled-components'
import { Container, FormattedP } from '../../Extend/Sections/Section1'

const RightContainer = styled(Container)`
    grid-template-areas: 'image content';
    grid-template-columns: 3fr 2fr;
    background: url('/services-rewards-bg.webp') no-repeat center;
    background-size: cover;
    @media screen and (max-width: 768px){
        display: block;
        box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.8);
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    grid-area: content;
`

const FormattedH3 = styled.div`
    color: gold;
    font-size: 25px;
    padding-bottom: 20px;
    font-family: 'Bodoni Moda';
    @media only screen and (max-width: 768px) {
        font-size: 30px;
    }
`

const UpdatedP = styled(FormattedP)`
    padding-right: 20%;
    @media only screen and (max-width: 768px) {
        padding-right: unset;
    }
`
const ParagraphContainer = styled.div`
    max-width: 800px;
`

const Paragraph = ({ title, text }) => {
    return (
        <ParagraphContainer>
            <FormattedH3>{title}</FormattedH3>
            <UpdatedP>{text}</UpdatedP>
        </ParagraphContainer>
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
        <RightContainer>
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
        </RightContainer>
    )
}

export default Section1
