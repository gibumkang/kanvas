import styled from 'styled-components'

const MinFullPage = styled.div`
    min-height: 100vh;//(100vh - 130px);
    background-color: #000;
    @media only screen and (max-width: 768px) {
        min-height: calc(100vh - 130px);
    }
`

export default MinFullPage
