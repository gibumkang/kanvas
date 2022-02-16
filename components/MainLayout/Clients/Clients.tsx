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
    .flex {
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
    }
`

const Clients = () => {
    return (
        <StyledClients>
            <h2>Our Previous Clients</h2>
            <div className="flex">
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
            </div>
        </StyledClients>
    )
}

export default Clients
