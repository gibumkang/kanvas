import styled from 'styled-components'

const ThreeToTwoGrid = styled.div`
    display: grid;
    grid-template-columns: ${(props) => (props.left ? '3fr 2fr' : '2fr 3fr')};
    padding: 5%;
    padding-bottom: 0;
    background-color: #000;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        grid-template-columns: unset;
        justify-content: center;
        align-items: center;
    }
`

const ThreeToTwoContainer = ({ children, left = true }) => (
    <ThreeToTwoGrid left={left} >{children}</ThreeToTwoGrid>
)

export default ThreeToTwoContainer
