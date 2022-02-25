import styled from 'styled-components'
import * as GS from '../../../styles/global'

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
        span {
            font-size: 4rem;
            font-family: 'Bodoni Moda', sans-serif;
            color: ${(props) => props.theme.colors.primary};
        }
    }
`

const Extend = () => {
    return (
        <>
            <GS.StyledBar />
            <Component>
                <h2>
                    extend your brand beyond the physical to the{' '}
                    <span>experiential</span>
                </h2>
            </Component>
            <GS.StyledBar />
        </>
    )
}

export default Extend
