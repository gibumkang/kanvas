import styled from 'styled-components'
import ServicesNavBar from './ServicesNavBar/ServicesNavBar'

const PinToBottomNavBar = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    
    h1 {
        font-size: 80px;
        margin-top: 150px;
    }
`

const ServicesHome = () => {
    return (
        <PinToBottomNavBar>
            <h1>Services</h1>
            <ServicesNavBar />
        </PinToBottomNavBar>
    )
}

export default ServicesHome
