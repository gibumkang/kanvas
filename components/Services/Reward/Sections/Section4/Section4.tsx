import { useRouter } from 'next/router'
import styled from 'styled-components'
import MinFullPage from '../../../../GeneralPurposeComponents/MinFullPage'
import YellowLetteringParagraph from '../../../../GeneralPurposeComponents/YellowLetteringParagraph'
import YellowUnderlineTitle from '../../../../GeneralPurposeComponents/YellowUnderlineTitle'
import ContactUsButton from './ContactUsButton/ContactUsButton'

const Container = styled(MinFullPage)`
    background: url('/services-destination.webp') no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        padding: 3rem;
    }
`

const FormattedContactUsButton = styled(ContactUsButton)`
    max-width: fit-content;
    margin-left: 10%;
    @media only screen and (max-width: 768px) {
        margin: unset;
    }
`

const StyledWrapper = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
        .button {
            margin: 4rem auto;
            display: block;
        }
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
                <StyledWrapper>
                    <YellowLetteringParagraph text={text} />
                    <FormattedContactUsButton
                        className="button"
                        onClick={routeToContactsOnClickHandler}
                    />
                </StyledWrapper>
            </ContentContainer>
        </Container>
    )
}

export default Section4
