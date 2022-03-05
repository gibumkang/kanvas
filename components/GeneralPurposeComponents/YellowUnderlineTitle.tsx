import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Text = styled.h4`
    grid-column-start: ${(props) => (props.left ? 1 : 2)};
    grid-column-end: span ${(props) => (props.left ? 2 : 3)};
    text-align: ${props => props.left ? "right" : "left"};

    @media only screen and (max-width: 768px) {
        grid-column-start: unset;
        grid-column-end: unset;
        text-align: center;
    }
`

const GoldBar = styled.div`
    height: 10px;
    grid-column-start: ${(props) => (props.left ? 1 : 2)};
    grid-column-end: span ${(props) => (props.left ? 2 : 3)};
    background-color: gold;

    @media only screen and (max-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 2;
        display: none;
    }
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
