import styled from 'styled-components'
import { useHeaderContext } from '../../../../../hooks/HeaderContext'

const BurgerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-end;
    align-items: flex-end;
    &:hover {
        cursor: pointer;
    }
`

const BiggerBar = styled.div`
    height: 3px;
    width: 32px;
    border-radius: 25%;
    background-color: black;
`

const SmallerBar = styled.div`
    height: 3px;
    width: 16px;
    border-radius: 25%;
    background-color: black;
`

const OffCanvasMenuIcon = () => {

    const { setView } = useHeaderContext();

    return (
        <BurgerContainer onClick={() => setView(true)}>
            <BiggerBar />
            <SmallerBar />
        </BurgerContainer>
    )
}

export default OffCanvasMenuIcon
