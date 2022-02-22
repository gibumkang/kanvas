import styled from 'styled-components'
import * as GS from '../../styles/global'

const RYSButton = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
`

const YellowButton = ({ children }) => {
    return (
        <RYSButton>
            <GS.StyledButton>
                {children}
            </GS.StyledButton>
        </RYSButton>
    )
}

export default YellowButton;