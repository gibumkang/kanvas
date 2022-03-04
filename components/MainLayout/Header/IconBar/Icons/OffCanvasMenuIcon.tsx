import styled from 'styled-components'
import { useHeaderContext } from '../../../../../hooks/HeaderContext'

const SVG = styled.svg`
    &:hover {
        cursor: pointer;
    }
`

const OffCanvasMenuIcon = () => {
    const { setView } = useHeaderContext()

    return (
        <SVG
            onClick={() => setView(true)}
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
            />
        </SVG>
    )
}

export default OffCanvasMenuIcon
