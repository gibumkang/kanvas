import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import * as GS from '../../../styles/global'
import ULNavLinks from '../ULNavLinks'

const StyledFooter = styled.footer`
    width: 100%;
    padding: 3rem 0rem;
    background: ${(props) => props.theme.colors.footerBackground};
`

const StyledFlex = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 3rem;
    max-width: ${(props) => props.theme.maxWidth};
    border-bottom: 0.1rem solid #999;
    gap: 3rem;
    & > div {
        flex: 1;
        &.logo-container {
            flex: 1.5;
            p {
                max-width: 45rem;
            }
        }
        &.footer-links {
            a {
                text-decoration: none;
            }
        }
        h3 {
            font-size: 2rem;
            font-family: 'DM Sans', sans-serif;
            font-weight: 300;
        }
        h3,
        p,
        a,
        ul,
        li {
            color: #fff;
        }
        ul {
            list-style: none;
            li {
                padding: 0.75rem 0rem;
            }
        }
    }
    @media screen and (max-width: ${(props) => props.theme.smWidth}) {
        border-bottom: unset;
        .logo-container {
            display: flex;
            flex-direction: column;
            gap: 50px;
            justify-content: center;
            align-items: center;
            p {
                font-size: 20px;
                padding: 0 40px;
            }
        }
        .disappear {
            display: none;
        }
    }
`

const StyledULNavLinks = styled(ULNavLinks)`
    list-style: none;
    li {
        padding: 0.75rem 0rem;
        div,
        a {
            color: #ccc;
            text-decoration: none;
            transition: all 0.25s ease-in-out;
            &:hover {
                color: #fff;
            }
        }
    }
`

const Copyright = styled.div`
    padding: 0rem 3rem 0rem 3rem;
    max-width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    margin-top: 4rem;
    p {
        color: #fff;
        text-align: center;
    }
    @media screen and (max-width: ${(props) => props.theme.smWidth}) {
        display: none;
    }
`

const ResponsiveImage = styled(GS.Image)`
    @media screen and (max-width: ${(props) => props.theme.smWidth}) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    return (
        <StyledFooter>
            <StyledFlex>
                <div className="logo-container">
                    <ResponsiveImage>
                        <Image
                            src="/logo.png"
                            width="140"
                            height="90"
                            alt="Raise Your Spirits"
                        />
                    </ResponsiveImage>
                    <p>
                        Creating environments to build lasting relationships.
                    </p>
                </div>
                <div className="disappear">
                    <h3>Helpful Links</h3>
                    <StyledULNavLinks />
                </div>
                <div className="disappear footer-links">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="tel:7247993542">724-799-3542</a></li>
                        <li><a href="mailto:info@raiseyourspirits.net">info@raiseyourspirits.net</a></li>
                    </ul>
                </div>
            </StyledFlex>
            <Copyright className="disappear">
                <p>&copy; {year} Raise Your Spirits. All Rights Reserved.</p>
            </Copyright>
        </StyledFooter>
    )
}

export default Footer
