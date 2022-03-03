import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledClients = styled.div`
    width: 100%;
    background: #222222;
    padding: 3rem 0rem;
    text-align: center;
    margin: 0 auto;
    h2 {
        padding: 3rem 0rem;
        font-size: 4rem;
    }
    /* .flex {
        display: flex;
        gap: 3rem;
        max-width: 90rem;
        margin: 0 auto;
        padding-bottom: 4rem;
        & > div {
            flex: 1;
            padding: 0rem 1.5rem;
        }
        @media screen and (max-width: 768px) {
            display: block;
            & > div {
                padding: 1.5rem 0rem;
            }
        }
    } */
`

const AutoGrid = styled.div`
    display: flex;
    gap: 3rem;
    max-width: 90rem;
    margin: 0 auto;
    padding-bottom: 4rem;
    & > div {
        flex: 1;
        padding: 0rem 1.5rem;
    }

    @media only screen and (max-width: 600px) {
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 10px;
        & > div {
            flex: unset;
            padding: 10px;
            display: grid;
            grid-template-columns: 1fr;
        }
        &:nth-child(odd) {
            justify-self: end;
        }
        &:nth-child(even) {
            justify-self: start;
        }
    }
`

const Title = styled.h2`
@media only screen and (max-width: 600px) {
    margin-top: 50px;
}
    `

const Clients = () => {
    return (
        <StyledClients>
            <Title>Our Previous Clients</Title>
            {/* <div className="flex"> */}
            <AutoGrid>
                <div>
                    <Image
                        src="https://picsum.photos/150/25"
                        width="150"
                        height="25"
                    />
                </div>
                <div>
                    <Image
                        src="https://picsum.photos/150/25"
                        width="150"
                        height="25"
                    />
                </div>
                <div>
                    <Image
                        src="https://picsum.photos/150/25"
                        width="150"
                        height="25"
                    />
                </div>
                <div>
                    <Image
                        src="https://picsum.photos/150/25"
                        width="150"
                        height="25"
                    />
                </div>
                <div>
                    <Image
                        src="https://picsum.photos/150/25"
                        width="150"
                        height="25"
                    />
                </div>
            </AutoGrid>
            {/* </div> */}
        </StyledClients>
    )
}

export default Clients
