import styled from 'styled-components'
import { Offcanvas } from 'react-bootstrap'
import { useHeaderContext } from '../../../../hooks/HeaderContext'
import ULNavLinks from '../../ULNavLinks'
import Logo from '../Logo/Logo'

const OffCanvasMenuLinks = styled(ULNavLinks)`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 100%;
    li {
        color: #fff;
        text-align: center;
    }
    li:hover {
        cursor: pointer;
    }
    li > a > div {
        width: 100%;
        color: #fff;
        padding: 1rem 0rem;
        font-family: 'Bodoni Moda', sans-serif;
        font-size: 2.5rem;
        transition: color .4s ease-in-out;
        &:hover {
            color: gold;
        }
    }
    li > a {
        color: #fff;
        text-decoration: none;
    }
`

const StyledOffCanvas = styled(Offcanvas)`
    background: rgba(0,0,0,.5);
`

const Body = styled(Offcanvas.Body)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    p {
        padding-top: 3rem;
        font-size: 1.2rem;
        color: #ccc;
    }
`

const OffCanvasMenu = () => {
    const { view, setView } = useHeaderContext()

    return (
        <StyledOffCanvas show={view} placement="end" onHide={()=>setView(false)} zIndex={9999}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Body>
                <OffCanvasMenuLinks />
                <p>All Rights Reserved.</p>
            </Body>
        </StyledOffCanvas>
    )
}

export default OffCanvasMenu
