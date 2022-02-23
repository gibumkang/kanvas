import styled from 'styled-components'

const Circle = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 10px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CircleCircle = ({ index }) => (
    <Circle>
        <div>{index}</div>
    </Circle>
)

export default CircleCircle
