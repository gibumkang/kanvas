import styled from 'styled-components'
import ServicesNavBar from './ServicesNavBar/ServicesNavBar'

const PinToBottomNavBar = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: url('/services-bg.webp') no-repeat center;
    background-size: cover;
    
    h1 {
        font-size: 8rem;
        margin-top: 15rem;
    }
    @media screen and (max-width: 768px){
        h1 {
            font-size: 5rem;
        }
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
