import { Offcanvas } from 'react-bootstrap'
import { useHeaderContext } from '../../../../hooks/HeaderContext'

const OffCanvasMenu = () => {
    const { view, setView } = useHeaderContext()

    return (
        <Offcanvas show={view} placement="end">
            <Offcanvas.Header>Hello?</Offcanvas.Header>
            <Offcanvas.Body>
                Yo
                <button onClick={() => setView(false)}>toggle off</button>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvasMenu
