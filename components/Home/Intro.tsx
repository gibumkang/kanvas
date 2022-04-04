import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
    gap: 5rem;
    display: flex;
    padding: 20rem 0rem;
    & > div {
        h2 {
            font-size: 3.2rem;
            color: #000;
        }
        p {
            font-size: 2.1rem;
            color: #555;
        }
        &.line {
            width: 0.1rem;
            background: #000;
        }
        &:nth-child(1),
        &:nth-child(3) {
            flex: 1;
        }
    }
    @media screen and (max-width: ${(props) => props.theme.midWidth}) {
        display: block;
        & > div {
            padding: 3rem 0rem;
            &.line {
                display: none;
            }
        }
    }
`

const Intro = () => {
    return (
        <>
            <div id="intro">&nbsp;</div>
            <StyledFlex>
                <div>
                    <h2>our mission</h2>
                    <p>
                        To create a digital presence empowered by design,
                        research, and experience. Our goal is to translate your
                        vision into reality.
                    </p>
                </div>
                <div className="line">&nbsp;</div>
                <div>
                    <h2>our services</h2>
                    <p>
                        Whether you are looking to launch an online store or
                        your very own NFT collection, we can help. See our faq
                        page for details.
                    </p>
                </div>
            </StyledFlex>
        </>
    )
}

export default Intro
