import styled from 'styled-components'

const Circle = styled.div`
    border-radius: 50%;
    min-width: 120px;
    height: 120px;
    border: 18px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

const CircleCircle = ({ children }) => (
    <Circle>
        {children}
    </Circle>
)

export default CircleCircle
