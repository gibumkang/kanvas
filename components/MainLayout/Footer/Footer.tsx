import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import * as GS from '../../../styles/global'

const StyledFooter = styled.footer`
    width: 100%;
    padding: 3rem 0rem;
    background: ${(props) => props.theme.colors.footerBackground};
`

const StyledFlex = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 3rem;
    max-width: 90%;
    border-bottom: 0.1rem solid #999;
    gap: 3rem;
    & > div {
        flex: 1;
        &.logo-container {
            flex: 1.5;
            p {
                max-width: 70rem;
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
        display: block;
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
`

const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    return (
        <StyledFooter>
            <StyledFlex>
                <div className="logo-container">
                    <GS.Image>
                        <Image
                            src="https://picsum.photos/200/300"
                            width="140"
                            height="90"
                        />
                    </GS.Image>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Labore ab eaque laborum consequatur voluptatem,
                        explicabo veniam nostrum blanditiis iure a debitis
                        molestias soluta reprehenderit nobis asperiores omnis
                        quam nemo mollitia?
                    </p>
                </div>
                <div>
                    <h3>Helpful Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Gallery</li>
                        <li>Clients</li>
                        <li>Story</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>
                        Address <br />
                        Phone <br />
                        Email
                    </p>
                </div>
            </StyledFlex>
            <Copyright>
                <p>&copy; {year} Raise Your Spirits. All Rights Reserved.</p>
            </Copyright>
        </StyledFooter>
    )
}

export default Footer
