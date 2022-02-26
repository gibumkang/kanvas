import styled from 'styled-components'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'

const FormattedH2 = styled.h2`
    background-color: #000;
    font-size: 100px;
`

const Extend = () => {
    return (
        <div id="extend">
            <FormattedH2>EXTEND</FormattedH2>
            <Section1 />
            <Section2 />
        </div>
    )
}

export default Extend
