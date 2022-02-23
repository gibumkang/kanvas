import styled from 'styled-components'

const ThreeToTwoGrid = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
`

const ThreeToTwoContainer = ({ children }) => (
    <ThreeToTwoGrid>{children}</ThreeToTwoGrid>
)

export default ThreeToTwoContainer
