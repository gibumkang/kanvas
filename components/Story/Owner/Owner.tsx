import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;
`

const Title = styled.h3`
    color: gold;
    text-align: center;
`

const Text = styled.div`
    color: #fff;
`

const Owner = ({ alt, width, height, title, children }) => {
    const imageProps = { alt, width, height }

    return (
        <Container>
            {/* <Image {...imageProps} /> */}
            <Title>{title}</Title>
            <Text>{children}</Text>
        </Container>
    )
}

export default Owner
