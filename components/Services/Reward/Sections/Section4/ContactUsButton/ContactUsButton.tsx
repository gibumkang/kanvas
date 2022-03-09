import { ButtonWithExtraEffects } from '../../../../Engage/Sections/Section4/Card/Card'
import ArrowIcon from './ArrowIcon'

const ContactUsButton = ({className, onClick}) => {
    const props = {className, onClick}
    return (
            <ButtonWithExtraEffects {...props}>
                <strong>Contact Us</strong> <ArrowIcon />
            </ButtonWithExtraEffects>
    )
}

export default ContactUsButton
