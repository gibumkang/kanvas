import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ButtonWithExtraEffects } from '../../../../Engage/Sections/Section4/Card/Card'
import ArrowIcon from './ArrowIcon'

const Padding = styled.div`
    padding: 0 10%;
`

const ContactUsButton = ({onClick}) => {
    return (
        <Padding>
            <ButtonWithExtraEffects onClick={onClick}>
                <strong>Contact Us</strong> <ArrowIcon />
            </ButtonWithExtraEffects>
        </Padding>
    )
}

export default ContactUsButton
