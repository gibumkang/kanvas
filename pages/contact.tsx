import styled from 'styled-components'
import { useState } from 'react'
import CustomTextField from '../components/Contact/CustomTextField'
import { sendMail } from '../lib/api'

const gap = '30px'

const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 64ch 1fr;
    background-color: #000;
    place-items: stretch;
    padding: 5rem;
    @media only screen and (max-width: 768px) {
        grid-template-columns: unset;
        display: flex;
        flex-direction: column;
    }
`
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${gap};
    margin-top: 150px;
`

const ContentContainer = styled.div`
    display: flex;
    gap: ${gap};
    flex-direction: column;
`

const DoubleLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${gap};
    @media only screen and (max-width: 768px) {
        grid-template-columns: unset;
        display: flex;
        flex-direction: column;
    }
`

const Title = styled.h1`
    text-align: center;
`

const FormattedContactUs = styled.button`
    background: ${(props) => props.theme.colors.primary};
    transition: all 0.25s ease-in-out;
    padding: 1.5rem 3rem;
    font-size: 1.9rem;
    border: none;
    display: inline-block;
    margin-top: 3rem;
    &:hover {
        background: #f5db08;
    }
`

const Contact = () => {
    const [formData, setFormData] = useState({
        first: '',
        last: '',
        email: '',
        subject: '',
        message: '',
        desiredDates: '',
        attendees: '',
        locations: '',
    })

    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const [buttonText, setButtonText] = useState<string>('Submit')
    const [submitting, setSubmitting] = useState<boolean>(false)
    const [wasMailSent, setWasMailSent] = useState<boolean>(true)

    const sendMailOnClickHandler = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setButtonText('Please wait...')
        const emailContent = `
            From: <strong>${formData.first + ' ' + formData.last}</strong>.
            <br /> 
            Email: <strong>${formData.email}</strong>.
            <br />
            The desired date for the event is: ${formData.desiredDates}.
            <br />
            The approximate number of attendees: ${formData.attendees}.
            <br />
            Specified location: ${formData.locations}.
            <br />
            <h3>Subject Line: ${formData.subject}</h3>
            ${formData.message}
        `
        const data = await sendMail('You recieved an inquiry from raiseyourspirits.net!', emailContent)
        if(data.sent){
            setSubmitting(false)
            setButtonText('Sent!')
        }else{
            setSubmitting(false)
            setButtonText('Submit')
            setWasMailSent(false)
        }
    }

    return (
        <Container>
            <div></div>
            <FlexContainer>
                <Title>Contact Us</Title>
                <form onSubmit={sendMailOnClickHandler}>
                    <ContentContainer>
                        <DoubleLayout>
                            <CustomTextField
                                name="first"
                                placeholder="First Name*"
                                value={formData.first}
                                onChange={changeHandler}
                                element="input"
                            />
                            <CustomTextField
                                name="last"
                                placeholder="Last Name*"
                                value={formData.last}
                                onChange={changeHandler}
                                element="input"
                            />
                        </DoubleLayout>
                        <CustomTextField
                            name="email"
                            placeholder="Email Address*"
                            value={formData.email}
                            onChange={changeHandler}
                            element="input"
                            type="email"
                        />
                        <CustomTextField
                            name="subject"
                            placeholder="Subject Line*"
                            value={formData.subject}
                            onChange={changeHandler}
                            element="input"
                        />
                        <CustomTextField
                            name="message"
                            placeholder="Message*"
                            value={formData.message}
                            onChange={changeHandler}
                            element="textarea"
                        />
                        <DoubleLayout>
                            <CustomTextField
                                name="desiredDates"
                                placeholder="Desired Event Date(s)"
                                value={formData.desiredDates}
                                onChange={changeHandler}
                                element="input"
                            />
                            <CustomTextField
                                name="attendees"
                                placeholder="Projected number of attendees"
                                value={formData.attendees}
                                onChange={changeHandler}
                                element="input"
                                type="number"
                                min={1}
                            />
                        </DoubleLayout>
                        <CustomTextField
                            name="locations"
                            placeholder="Desired Location(s). Please write the city and state"
                            value={formData.locations}
                            onChange={changeHandler}
                            element="input"
                        />
                    </ContentContainer>
                    <FormattedContactUs type="submit" disabled={submitting}>{buttonText}</FormattedContactUs>
                    {!wasMailSent && <p>Your message did not send. Please try again.</p>}
                </form>
            </FlexContainer>
            <div></div>
        </Container>
    )
}

export default Contact
