import { motion } from 'framer-motion'
import styled from 'styled-components'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'

export const FormattedH2 = styled(motion.h2)`
    font-size: 100px;
    padding: 50px;

    @media only screen and (max-width: 768px) {
        font-size: 50px;
        text-align: center;
        padding-top: 50px;
    }
`

const StyledContainer = styled.div`
    background: #000;
`

const Extend = () => {
    return (
        <StyledContainer id="extend">
            <FormattedH2 initial={{ x: -50, opacity: 0}} whileInView={{ x: 0, opacity: 1, transition: { duration: 1} }}>EXTEND</FormattedH2>
            <Section1 />
            <Section2 />
        </StyledContainer>
    )
}

export default Extend
