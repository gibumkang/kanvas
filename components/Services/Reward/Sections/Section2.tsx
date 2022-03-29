import YellowLetteringParagraph from "../../../GeneralPurposeComponents/YellowLetteringParagraph"
import { ContentSection, FullPageSection } from "../../Engage/Sections/Section1"
import styled from 'styled-components'

const StyledWineContainer = styled.div`
    padding: 30rem 0rem;
    background: url('/wine-container.webp') no-repeat center;
    background-size: cover;
    @media screen and (max-width: 768px){
        padding: 20rem 0rem;
    }
`

const Section2 = () => {

    const text = "In addition, no drinking experience is the same once you have experienced the clearest ice you've ever seen using our craft ice molds. Technology and art combine to provide you with an ice creation system that will not disappoint."

    return (
        <FullPageSection>
            <StyledWineContainer>&nbsp;</StyledWineContainer>
            <ContentSection>
                <YellowLetteringParagraph text={text} />
            </ContentSection>
        </FullPageSection>
    )
}

export default Section2;