import React, { useState } from 'react'
import styled from 'styled-components'
import * as GS from '../../../styles/global'
import Lightbox from '../../GeneralPurposeComponents/Lightbox/Lightbox'
import { slider } from '../../../data/slider'

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
        cursor: pointer;
    }
    img {
        width: 100%;
        height: auto;
    }
`

const SeeMoreButton = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
`

const HomeGallery = () => {
    const [modalShow, setModalShow] = useState<boolean>(false)
    const [imageSrc, setImageSrc] = useState<string>('')
    const [imageAlt, setImageAlt] = useState<string>('')

    const clickHandler = (e) => {
        setImageSrc(e.target.src)
        setImageAlt(e.target.alt)
        setModalShow(true)
    }

    return (
        <>
            <Lightbox
                show={modalShow}
                onHide={() => setModalShow(false)}
                image={imageSrc}
                alt={imageAlt}
            />
            <Grid>
                {slider.map((slide) => {
                    return (
                        <StyledImage
                            onClick={(e) => clickHandler(e)}
                            key={slide.name}
                        >
                            <img src={slide.src} alt={slide.alt} className={slide.class ? slide.class : ''} />
                        </StyledImage>
                    )
                })}
                <SeeMoreButton>
                    <GS.StyledButton>
                        See <strong>More</strong>
                    </GS.StyledButton>
                </SeeMoreButton>
            </Grid>
        </>
    )
}

export default HomeGallery
