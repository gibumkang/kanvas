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
    gap: 35px;
    justify-content: center;
`

const Section4 = () => {
    return (
        <>
            <GS.StyledBar />
            <Component>
                <GridContainer>
                    <Card
                        src="https://picsum.photos/id/100/400/400"
                        text="some text"
                    />
                    <Card
                        src="https://picsum.photos/id/100/400/400"
                        text="some text"
                    />
                    <Card
                        src="https://picsum.photos/id/100/400/400"
                        text="some text"
                    />
                </GridContainer>
            </Component>
            <GS.StyledBar />
        </>
    )
}

export default Section4
