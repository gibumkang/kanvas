import styled from 'styled-components'
import MinFullPage from "../GeneralPurposeComponents/MinFullPage";
import ServicesNavBar from "./ServicesNavBar/ServicesNavBar";

const PinToBottomNavBar = styled(MinFullPage)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

const ServicesHome = () => {
    return (
        <PinToBottomNavBar>
            <ServicesNavBar />
        </PinToBottomNavBar>
    )
}

export default ServicesHome;