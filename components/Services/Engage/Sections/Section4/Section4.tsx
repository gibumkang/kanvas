import styled from 'styled-components'
import * as GS from '../../../../../styles/global'
import Card from './Card/Card'

const Component = styled.div`
    padding: 4.5rem;
    background: #000;
    h2 {
        max-width: 90rem;
        line-height: 5.5rem;
        margin: 0 auto;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(410px, 1fr));
    gap: 3.5rem;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(410px, 1fr));
        gap: 5rem;
        padding: 7.5rem 0;
    }
`

const Section4 = () => {
    return (
        <>
            <GS.StyledBar />
            <Component>
                <GridContainer>
                    <Card
                        src="/modal1.webp"
                        text="Experiential sales support services"
                    />
                    <Card
                        src="/modal2.webp"
                        text="Donor and constituent engagement"
                    />
                    <Card
                        src="/modal3.webp"
                        text="Colleges and universities"
                    />
                </GridContainer>
            </Component>
            <GS.StyledBar />
        </>
    )
}

export default Section4
