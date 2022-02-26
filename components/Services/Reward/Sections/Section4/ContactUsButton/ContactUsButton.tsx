import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ButtonWithExtraEffects } from '../../../../Engage/Sections/Section4/Card/Card'
import ArrowIcon from './ArrowIcon'

const Padding = styled.div`
    padding: 0 10%;
`

const ContactUsButton = () => {
    const router = useRouter()
    return (
        <Padding>
            <ButtonWithExtraEffects onClick={() => router.push('/contact')}>
                <strong>Contact Us</strong> <ArrowIcon />
            </ButtonWithExtraEffects>
        </Padding>
    )
}

export default ContactUsButton
