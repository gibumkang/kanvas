import styled from 'styled-components'

const BurgerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-end;
    align-items: flex-end;
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

const BurgerIcon = () => {
    return (
        <BurgerContainer>
            <BiggerBar />
            <SmallerBar />
        </BurgerContainer>
    )
}

export default BurgerIcon
