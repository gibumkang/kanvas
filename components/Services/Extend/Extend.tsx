import styled from 'styled-components'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'

export const FormattedH2 = styled.h2`
    background-color: #000;
    font-size: 100px;
    padding: 50px;

    @media only screen and (max-width: 768px) {
        font-size: 50px;
        text-align: center;
        padding-top: 50px;
    }
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
