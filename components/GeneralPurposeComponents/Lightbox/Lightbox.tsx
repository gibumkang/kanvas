import React from 'react'
import Modal from 'react-bootstrap/Modal'
import styled from 'styled-components'

interface LightboxProps {
    image: string
    alt: string
    show: boolean
    onHide: () => void
}

const StyledBody = styled(Modal.Body)`
    padding: 0rem;
    img {
        width: 100%;
        height: auto;
    }
`

const StyledHeader = styled(Modal.Header)`
    background: transparent;
    .h4 {
        font-size: 2rem;
    }
`

const Lightbox: React.FC<LightboxProps> = (props) => {
    const { image, alt } = props
    console.log('image link', image)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <StyledHeader closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {alt}
                </Modal.Title>
            </StyledHeader>
            <StyledBody>
                <img src={image} alt={alt} />
            </StyledBody>
        </Modal>
    )
}

export default Lightbox
