import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
`

const Text = styled.h4`
    grid-column-start: ${(props) => (props.left ? 1 : 2)};
    grid-column-end: span ${(props) => (props.left ? 2 : 3)};
    text-align: ${props => props.left ? "right" : "left"};
`

const GoldBar = styled.div`
    height: 10px;
    grid-column-start: ${(props) => (props.left ? 1 : 2)};
    grid-column-end: span ${(props) => (props.left ? 2 : 3)};
    background-color: gold;
`

interface IProps {
    title : string
    left : boolean
}

const YellowUnderlineTitle = ({ title, left } : IProps) => (
    <GridContainer>
        <Text left={left}>{title}</Text>
        <GoldBar left={left} />
    </GridContainer>
)

export default YellowUnderlineTitle
