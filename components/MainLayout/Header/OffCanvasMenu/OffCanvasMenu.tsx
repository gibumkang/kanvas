import styled from 'styled-components'
import { Offcanvas } from 'react-bootstrap'
import { useHeaderContext } from '../../../../hooks/HeaderContext'
import { meta } from '../../../../data/meta'
import {links} from '../../../../data/links'
import Link from 'next/link'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const StyledOffCanvas = styled(Offcanvas)`
    background: rgba(0,0,0,.5);
`

const Body = styled(Offcanvas.Body)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    p {
        padding-top: 3rem;
        font-size: 1.2rem;
        color: #ccc;
    }
    ul {
        list-style: none;
        text-align: center;
        margin-top: 3rem;
        li {
            padding: 1rem 0rem;
            a {
                color: #eee;
                font-size: 2.4rem;
                transition: all .25s ease-in-out;
                text-decoration: none;
                &:hover {
                    color: ${(props) => props.theme.colors.primary};
                }
            }
        }
    }
    .close {
        color: #fff;
        font-size: 2.5rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
        transition: all .25s ease-in-out;
        transform: scale(1);
        cursor: pointer;
        &:hover {
            transform: scale(1.1);
        }
    }
`

const OffCanvasMenu = () => {
    const { view, setView } = useHeaderContext()

    return (
        <StyledOffCanvas show={view} placement="end" onHide={()=>setView(false)} zIndex={9999}>
            <Body>
                <AiOutlineCloseCircle className="close" onClick={() => setView(false)} />
                <ul>
                    {links.map(link => {
                        return (
                            <li key={link.title} onClick={() => setView(false)}>
                                <Link passHref href={link.link}>{link.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <p>{meta[0].name}. All Rights Reserved.</p>
            </Body>
        </StyledOffCanvas>
    )
}

export default OffCanvasMenu
