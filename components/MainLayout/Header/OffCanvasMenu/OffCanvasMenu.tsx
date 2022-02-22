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
        text-align: center;
        border: 1px solid white;
    }
    li:hover {
        cursor: pointer;
        border: 1px solid black;
    }
    li > a > div {
        width: 100%;
    }
    li > a {
        text-decoration: none;
    }
`

const Body = styled(Offcanvas.Body)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const OffCanvasMenu = () => {
    const { view, setView } = useHeaderContext()

    return (
        <Offcanvas show={view} placement="end" onHide={()=>setView(false)}>
            <Offcanvas.Header closeButton>Raise Your Spirits</Offcanvas.Header>
            <Body>
                <OffCanvasMenuLinks />
                <Logo />
            </Body>
        </Offcanvas>
    )
}

export default OffCanvasMenu
