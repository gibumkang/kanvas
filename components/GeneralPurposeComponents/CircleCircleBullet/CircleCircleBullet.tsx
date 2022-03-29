import CircleCircle from './CircleCircle/CircleCircle'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CCBContainer = styled(motion.div)`
    svg {
        width: 3rem;
        height: auto;
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
