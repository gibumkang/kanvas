import styled from 'styled-components'
import { Offcanvas } from 'react-bootstrap'
import { useHeaderContext } from '../../../../hooks/HeaderContext'
import ULNavLinks from '../../ULNavLinks'

const OffCanvasMenuLinks = styled(ULNavLinks)`
    display: flex;
    flex-direction: column;
    list-style-type: none;
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

const OffCanvasMenu = () => {
    const { view, setView } = useHeaderContext()

    return (
        <Offcanvas show={view} placement="end">
            <Offcanvas.Header closeButton>Hello?</Offcanvas.Header>
            <Offcanvas.Body>
                <OffCanvasMenuLinks />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvasMenu
