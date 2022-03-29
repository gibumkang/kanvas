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
    @media only screen and (max-width: 1200px) {
        display: block;
        & > div {
            padding-bottom: 4rem;
        }
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
                        link="/contact"
                        btnText="Contact Us"
                    />
                    <Card
                        src="/modal2.webp"
                        text="Donor and constituent engagement"
                        link="http://nebula.wsimg.com/921d0065377ea386457150138f7d6d0c?AccessKeyId=F68F98D42A8D2815BD23&disposition=0&alloworigin=1"
                    />
                    <Card
                        src="/modal3.webp"
                        text="Colleges and universities"
                        link="http://nebula.wsimg.com/785f6c183d54229d6af37da2b1a40978?AccessKeyId=F68F98D42A8D2815BD23&disposition=0&alloworigin=1"
                    />
                </GridContainer>
            </Component>
            <GS.StyledBar />
        </>
    )
}

export default Section4
