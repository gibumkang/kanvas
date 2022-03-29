import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 200px;
`

const Title = styled.h6`
    color: #fff;
    font-weight: bold;
    font-size: 20px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const Content = styled.p`
    color: #fff;
    font-weight: 200;
    font-size: 19px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const ReadMore = styled.div`
    color: gold;
    font-size: 19px;
    font-weight: bold;
    transition: all .25s ease-in-out;
    &:hover {
        cursor: pointer;
        color: #fff;
    }

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const BulletContent = ({ title, content, link }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <Link href={link}><ReadMore>Read More</ReadMore></Link>
        </Container>
    )
}

export default BulletContent
