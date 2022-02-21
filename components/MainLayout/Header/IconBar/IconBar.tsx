import styled from "styled-components";

import OffCanvasMenuIcon from "./Icons/OffCanvasMenuIcon";
import SearchIcon from "./Icons/SearchIcon";

const IconBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 30px;
    padding-top: 12px;
`

const IconBar = () => {
    return (
        <IconBarContainer>
            <SearchIcon />
            <OffCanvasMenuIcon />
        </IconBarContainer>
    )
}

export default IconBar;