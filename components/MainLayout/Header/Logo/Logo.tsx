import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { meta } from '../../../../data/meta'

interface LogoProps {
    logo: string
}

const ImageContainer = styled.div`
    cursor: pointer;
`

const Logo: React.FC<LogoProps> = (props) => {
    const { logo } = props
    return (
        <Link href="/" passHref>
            <ImageContainer>
                <Image src={logo} width="146" height="60" alt={meta[0].alt} />
            </ImageContainer>
        </Link>
    )
}

export default Logo
