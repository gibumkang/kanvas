import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledClients = styled.div`
    width: 100%;
    background: #fff;
    padding: 3rem 0rem;
    text-align: center;
    margin: 0 auto;
    h2 {
        padding: 3rem 0rem;
        font-size: 4rem;
        color: #000;
    }
`

const AutoGrid = styled.div`
    display: grid;
    max-width: 140rem;
    margin: 0 auto;
    padding: 0rem 3rem 4rem 3rem;
    grid-gap: 3rem;
    margin: 5rem auto;
    grid-template-columns: repeat(5, 1fr);
    & > div {
        padding: 0rem 1.5rem;
        filter: grayscale(1);
        transition: all 0.25s ease-in-out;
        &:hover {
            filter: grayscale(0);
            transform: scale(1.05);
        }
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        margin: 2.5rem auto;
    }
`

const Title = styled.h2`
    @media only screen and (max-width: 768px) {
        margin-top: 50px;
    }
`

const Clients = () => {
    return (
        <StyledClients>
            <Title>Our Previous Clients</Title>
            <AutoGrid>
                <div>
                    <Image src="/logo-1.webp" width="250" height="250" alt="T.Row Price" />
                </div>
                <div>
                    <Image src="/logo-2.webp" width="250" height="250" alt="Beam Suntory" />
                </div>
                <div>
                    <Image src="/logo-3.webp" width="250" height="250" alt="Federated Hermes" />
                </div>
                <div>
                    <Image src="/logo-4.webp" width="250" height="250" alt="The Pittsburgh Cultural Trust" />
                </div>
                <div>
                    <Image src="/logo-5.webp" width="250" height="250" alt="Empower Retirement" />
                </div>
                <div>
                    <Image src="/logo-6.webp" width="250" height="250" alt="Aviana" />
                </div>
                <div>
                    <Image src="/logo-8.webp" width="250" height="250" alt="CIBC" />
                </div>
                <div>
                    <Image src="/logo-9.webp" width="250" height="250" alt="IBM" />
                </div>
                <div>
                    <Image src="/logo-10.webp" width="250" height="250" alt="Larrimors" />
                </div>
                <div>
                    <Image src="/logo-11.webp" width="250" height="250" alt="Wesco" />
                </div>
                <div>
                    <Image src="/logo-12.webp" width="250" height="250" alt="American Century Investments" />
                </div>
                <div>
                    <Image src="/logo-13.webp" width="250" height="250" alt="HC1" />
                </div>
                <div>
                    <Image src="/logo-14.webp" width="250" height="250" alt="Pittsburgh Ballet Theatre" />
                </div>
                <div>
                    <Image src="/logo-15.webp" width="250" height="250" alt="Perficient" />
                </div>
                <div>
                    <Image src="/logo-16.webp" width="250" height="250" alt="Henne Jewelry" />
                </div>
            </AutoGrid>
        </StyledClients>
    )
}

export default Clients
