import CircleCircle from './CircleCircle/CircleCircle'
import styled from 'styled-components'

const CCBContainer = styled.div`
    display: flex;
    gap: 10px;
`

const CircleCircleBullet = ({ children, index }) => {
    return (
        <CCBContainer>
            <CircleCircle index={index} />
            {children}
        </CCBContainer>
    )
}

export default CircleCircleBullet
