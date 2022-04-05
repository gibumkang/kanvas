import React from 'react'
import styled from 'styled-components'

interface HeadingProps {
    title: string
    description: string
}

const StyledIntro = styled.div`
    margin: 0 auto;
    padding: 30rem 3rem;
    max-width: ${(props) => props.theme.maxWidth};
    h1 {
        font-size: 4rem;
        position: relative;
        top: 2rem;
        color: ${(props) => props.theme.colors.primary};
    }

    p {
        font-size: 6rem;
        max-width: 100rem;
        line-height: 7rem;
    }
    @media screen and (max-width: ${(props) => props.theme.midWidth}) {
        h1 {
            font-size: 2.5rem;
            top: 0rem;
        }
        p {
            font-size: 3rem;
            line-height: 4rem;
        }
    }
`

const Heading: React.FC<HeadingProps> = (props) => {
    const { title, description } = props
    return (
        <StyledIntro>
            <h1>{title}</h1>
            <p>{description}</p>
        </StyledIntro>
    )
}

export default Heading
