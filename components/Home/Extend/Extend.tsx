import styled from 'styled-components'
import * as GS from '../../../styles/global'
import Bullets from './Bullets/Bullets'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Component = styled.div`
    padding: 150px 0 0 0;
    background: #000;
    h2 {
        //max-width: 90rem;
        max-width: 1200px;
        line-height: 8rem;
        margin: 0 auto;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        font-size: 55px;
        span {
            font-size: 6.5rem;
            font-family: 'Bodoni Moda', sans-serif;
            color: ${(props) => props.theme.colors.primary};
        }
    }
    @media only screen and (max-width: 768px) {
        padding: 50px 0 0 0;
            h2 {
                font-size: 40px;
                max-width: 90%;
                line-height: 5rem;
                span {
                    font-size: 45px;
                }
            }
        }
`

const Extend = () => {
    return (
        <Container>
            <GS.StyledBar />
            <Component>
                <h2>
                    extend your brand beyond the physical to the{' '}
                    <span>experiential</span>
                </h2>
            </Component>
            <Bullets />
            <GS.StyledBar />
        </Container>
    )
}

export default Extend
