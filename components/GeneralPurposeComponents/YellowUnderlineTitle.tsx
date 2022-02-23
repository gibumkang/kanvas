import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
`

const GoldBar = styled.div`
    height: 10px;
    grid-column-start: ${(props) => props.left ? 1 : 2};
    grid-column-end: span ${props => props.left ? 2 : 3};
    grid-row-start: ${(props) => props.left ? 1 : 1};
    background-color: gold;
`
// const YellowUnderlineTitle = ({ children ,left }) => <GridContainer><h4>{title}</h4><GoldBar left={left} /></GridContainer>