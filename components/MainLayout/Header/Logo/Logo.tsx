import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const ImageContainer = styled.div`
    cursor: pointer;
`

const Logo = () => {
    return (
        <Link href="/" passHref><ImageContainer><Image src="/logo.png" width="146" height="95" alt="Raise Your Spirits" /></ImageContainer></Link>
    )
}

export default Logo
