import YellowLetteringParagraph from "../../../GeneralPurposeComponents/YellowLetteringParagraph"
import { ContentSection, FullPageSection } from "../../Engage/Sections/Section1"

const Section2 = () => {

    const text = "In addition, no drinking experience is the same once you have experienced the clearest ice you’ve ever seen using our craft ice molds. Technology and art combine to provide you with an ice creation system that will not disappoint."

    return (
        <FullPageSection>
            <div></div>
            <ContentSection>
                <YellowLetteringParagraph text={text} />
            </ContentSection>
        </FullPageSection>
    )
}

export default Section2;