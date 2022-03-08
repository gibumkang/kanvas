import { useRouter } from 'next/router'
import styled from 'styled-components'
import MinFullPage from '../../../../GeneralPurposeComponents/MinFullPage'
import YellowLetteringParagraph from '../../../../GeneralPurposeComponents/YellowLetteringParagraph'
import YellowUnderlineTitle from '../../../../GeneralPurposeComponents/YellowUnderlineTitle'
import ContactUsButton from './ContactUsButton/ContactUsButton'

const Container = styled(MinFullPage)`
    background-image: url('https://picsum.photos/id/230/400/400');
    background-size: 100% 100%;
    background-color: #000;
    @media only screen and (max-width: 768px) {
        background-image: unset;
        padding-top: 50px;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 55%;
    @media only screen and (max-width: 768px) {
        max-width: unset;
        justify-content: center;
        align-items: center;
    }
`

const Section4 = () => {
    const router = useRouter()

    const routeToContactsOnClickHandler = () => {
        router.push('/contact')
    }

    const text = `As the ability to attract, retain, and incentivize talented sales personnel grows ever more challenging, RYS' destination Experiences ("Experience(s)") serve as turnkey alternatives to the traditional incentive options. These Experiences not only streamline execution and timing for your internal staff, but they are also  tool to attract executive and high-performing salespersons. This is the ultimate convergence of craft spirits and leisure travel. Through our exclusiv relationships with various craft distilleries and other locations such as Kentucky, La Vegas, our group coordinates private distillery tours, luxury accommodations; dining Experiences at the distillery, transportation and other VIP services.`

    return (
        <Container>
            <ContentContainer>
                <YellowUnderlineTitle
                    title="DESTINATION EXPERIENCES"
                    left={true}
                />
                <YellowLetteringParagraph text={text} />
                <ContactUsButton onClick={routeToContactsOnClickHandler} />
            </ContentContainer>
        </Container>
    )
}

export default Section4
