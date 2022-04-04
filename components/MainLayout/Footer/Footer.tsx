import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { meta } from '../../../data/meta'

const StyledFooter = styled.footer`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: #000;
    padding: 0rem 3rem;
    background: url('/logo-k.svg') no-repeat bottom left
        ${(props) => props.theme.colors.footerBackground};
    background-position-x: 10%;
    box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.6);
    .contact {
        small {
            display: block;
        }
        a {
            font-size: 4rem;
        }
    }
    p {
        padding: 8rem 0rem;
        margin-bottom: 0rem;
    }
`

const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    return (
        <StyledFooter>
            <div className="contact">
                <small>ready to chat?</small>
                <a href="#" target="_blank">
                    contact us
                </a>
            </div>
            <p>
                &copy; {year} {meta[0].name}. All Rights Reserved.
            </p>
        </StyledFooter>
    )
}

export default Footer
