import styled from 'styled-components'
import OffCanvasMenuIcon from './Icons/OffCanvasMenuIcon'

const IconBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-top: 12px;
`

const IconBar = () => {
    return (
        <IconBarContainer>
            <OffCanvasMenuIcon />
        </IconBarContainer>
    )
}

export default IconBar
