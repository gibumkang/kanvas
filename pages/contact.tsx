import styled from 'styled-components'
import { useState } from 'react'
import CustomTextField from '../components/Contact/CustomTextField'
import ContactUsButton from '../components/Services/Reward/Sections/Section4/ContactUsButton/ContactUsButton'
import { sendMail } from '../lib/api'

const gap = '30px'

const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 64ch 1fr;
    background-color: #000;
    place-items: stretch;
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
`

const Title = styled.h1`
    width: 100%;
    text-align: center;
`

const FormattedContactUs = styled(ContactUsButton)`
    padding: unset;
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

    const sendMailOnClickHandler = async () => {
        const res = await sendMail(formData)
    }

    return (
        <Container>
            <div></div>
            <FlexContainer>
                <Title>Contact Us</Title>
                <form>
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
                    <FormattedContactUs onClick={sendMailOnClickHandler} />
                </form>
            </FlexContainer>
            <div></div>
        </Container>
    )
}

export default Contact
