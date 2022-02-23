import styled from 'styled-components'
import CheckMarkIcon from "./CheckMarkIcon/CheckMarkIcon";

const CheckMarkContainer = styled.div`
    display: flex;
    gap: 10px;
`

const CheckMarkBullet = ({ children }) => {
    return (
        <CheckMarkContainer>
            <CheckMarkIcon />
            {children}
        </CheckMarkContainer>
    )
}

export default CheckMarkBullet;