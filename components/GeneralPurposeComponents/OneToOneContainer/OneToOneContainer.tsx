import styled from 'styled-components'

const OneToOneGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const OneToOneContainer = ({ children }) => <OneToOneGrid>{children}</OneToOneGrid>

export default OneToOneContainer;