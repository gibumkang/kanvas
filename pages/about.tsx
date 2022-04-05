import React from 'react'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Heading from '../components/MainLayout/Heading/Heading'

const StyledContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 0rem 3rem;
    .accordion-item {
        border: none;
    }
    .accordion-button {
        font-size: 4rem;
    }
    .accordion-button:not(.collapsed) {
        background: none;
        color: ${(props) => props.theme.colors.primary};
    }
    .accordion-body {
        padding: 3rem 1.25rem;
        h3 {
            font-size: 2.5rem;
            color: ${(props) => props.theme.colors.primary};
        }
    }
    @media screen and (max-width: ${(props) => props.theme.midWidth}) {
        .accordion-button {
            font-size: 3rem;
        }
    }
`

const about = () => {
    return (
        <>
            <Heading
                title={'about'}
                description={
                    'just folks looking to make the web a better place.'
                }
            />
            <StyledContainer>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            what are your starting prices?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Since his youth, Ben was drafting menus for
                                imaginary restaurants in outer space and
                                creating whacky, yet totally fun websites on
                                Geocities. It wasn&apos;t until his early
                                twenties when he discovered writing code,
                                combining his fascination for the arts to be a
                                frontend developer. He is currently an MBA/MIS
                                student at UNLV with over ten years of
                                experience in the web development field. When he
                                isn&apos;t absored in his work, you can find him
                                on the slopes partaking in winter sports.
                            </p>
                            <p>
                                The head engineer is really a diehard anime fan
                                inside. You will find Matt rocking his Naruto
                                profile picture more than his actual face these
                                days, but this rockstar ninja is not to be taken
                                lightly. Matt is the author of countless notable
                                web3 projects such as Lazy Lions NFT, pioneering
                                the way for new and exciting apps in the
                                cryptocurrency space.
                            </p>
                            <p>
                                This talented graphic designer knows more than
                                just making pretty things, Borami is highly
                                knowledgeable in a variety of web platforms
                                pertaining to ecommerce and web3. She has an
                                extensive career in traditional graphic design
                                and is now taking the web3 scene by storm. And
                                if that isn&apos;t impressive enough, she is the
                                mother of two wonderful kids. Never doubt the
                                power of being a supermom!
                            </p>
                            <p>
                                Aaron is a recent graduate and new to the
                                development scene, but his composure and
                                approach in his work is one that is comparable
                                to a seasoned veteran. A houseplant lover at
                                heart, you can find Aaron reading up on the
                                latest news and documentation available in the
                                development world, feeding his drive to be a
                                superstar in this industry.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </StyledContainer>
        </>
    )
}

export default about
