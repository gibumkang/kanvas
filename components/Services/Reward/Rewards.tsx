import styled from '@emotion/styled'
import { FormattedH2 } from '../Extend/Extend'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4/Section4'

const StyledContainer = styled.div`
    background: #000;
`

const Reward = () => {
    return (
        <StyledContainer id="reward">
            <FormattedH2 initial={{ x: -50, opacity: 0}} whileInView={{ x: 0, opacity: 1, transition: { duration: 1} }}>REWARDS</FormattedH2>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </StyledContainer>
    )
}

export default Reward
