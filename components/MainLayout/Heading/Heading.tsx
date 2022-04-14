import React from 'react'
import styled from 'styled-components'
import * as GS from '../../../styles/global'

interface HeadingProps {
    title: string
    description: string
    parse?: boolean
}

const StyledIntro = styled.div`
    margin: 0 auto;
    padding: 30rem 3rem;
    max-width: ${(props) => props.theme.maxWidth};
    h1 {
        font-size: 4rem;
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
        }
        p {
            font-size: 3rem;
            line-height: 4rem;
        }
    }
`

const Heading: React.FC<HeadingProps> = (props) => {
    const { title, description, parse } = props
    return (
        <StyledIntro>
            <h1>{title}</h1>
            <GS.StyledUnderline dangerouslySetInnerHTML={{ __html: description }} />
        </StyledIntro>
    )
}

export default Heading
