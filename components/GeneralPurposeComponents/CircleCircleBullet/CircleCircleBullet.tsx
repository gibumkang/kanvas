import CircleCircle from './CircleCircle/CircleCircle'
import styled from 'styled-components'

const CCBContainer = styled.div`
    display: flex;
    gap: 10px;

    @media only screen and (max-width: 768px) {
            justify-content: center;
        }
`

const CircleCircleBullet = ({ children }) => {
    return (
        <CCBContainer>
            <CircleCircle>{children}</CircleCircle>
        </CCBContainer>
    )
}

export default CircleCircleBullet
