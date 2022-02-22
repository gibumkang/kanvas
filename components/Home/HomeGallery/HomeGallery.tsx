import React from 'react'
import styled from 'styled-components'
import * as GS from '../../../styles/global'
import Image from 'next/image'
import YellowButton from '../YellowButton'

const Grid = styled.div`
    display: grid;
    width: 100%;
    position: relative;
    grid-template-columns: repeat(8, 1fr);
    & > div {
        display: block;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(6, 1fr);
        .desktop {
            display: none;
        }
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        .tablet {
            display: none;
        }
    }
`

const StyledImage = styled.div`
    filter: brightness(0.7);
    transition: filter 0.25s ease-in-out;
    &:hover {
        filter: brightness(1);
    }
`


const HomeGallery = () => {
    return (
        <Grid>
            <div>
                <StyledImage>
                    <Image
                        src="https://picsum.photos/400/400"
                        width="450"
                        height="400"
                        alt="Gallery Image"
                        layout="responsive"
                    />
                </StyledImage>
            </div>
            <div>
                <StyledImage>
                    <Image
                        src="https://picsum.photos/400/400"
                        width="450"
                        height="400"
                        alt="Gallery Image"
                        layout="responsive"
                    />
                </StyledImage>
            </div>
            <div>
                <StyledImage>
                    <Image
                        src="https://picsum.photos/400/400"
                        width="450"
                        height="400"
                        alt="Gallery Image"
                        layout="responsive"
                    />
                </StyledImage>
            </div>
            <div>
                <StyledImage>
                    <Image
                        src="https://picsum.photos/400/400"
                        width="450"
                        height="400"
                        alt="Gallery Image"
                        layout="responsive"
                    />
                </StyledImage>
            </div>
            <div className="tablet">
                <StyledImage>
                    <Image
                        src="https://picsum.photos/400/400"
                        width="450"
                        height="400"
                        alt="Gallery Image"
                        layout="responsive"
                    />
                </StyledImage>
            </div>
            <div className="tablet">
                <StyledImage>
                    <Image
                        src="https://picsum.photos/400/400"
                        width="450"
                        height="400"
                        alt="Gallery Image"
                        layout="responsive"
                    />
                </StyledImage>
            </div>
            <div className="desktop">
                <StyledImage>
                    <Image
                        src="https://picsum.photos/400/400"
                        width="450"
                        height="400"
                        alt="Gallery Image"
                        layout="responsive"
                    />
                </StyledImage>
            </div>
            <div className="desktop">
                <StyledImage>
                    <Image
                        src="https://picsum.photos/400/400"
                        width="450"
                        height="400"
                        alt="Gallery Image"
                        layout="responsive"
                    />
                </StyledImage>
            </div>
            <YellowButton>
                See <strong>More</strong>
            </YellowButton>
        </Grid>
    )
}

export default HomeGallery
