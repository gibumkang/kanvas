import Link from 'next/link'

interface IProps {
    className?: any
}

const ULNavLinks = ({ className }: IProps) => (
    <ul className={className}>
        <li>
            <Link href="/">
                <a>
                    <div>Home</div>
                </a>
            </Link>
        </li>
        <li>
            <Link href="/services">
                <a>
                    <div>Services</div>
                </a>
            </Link>
        </li>
        <li>
            <Link href="/gallery">
                <a>
                    <div>Gallery</div>
                </a>
            </Link>
        </li>
        <li>
            <Link href="/clients">
                <a>
                    <div>Clients</div>
                </a>
            </Link>
        </li>
        <li>
            <Link href="/story">
                <a>
                    <div>Story</div>
                </a>
            </Link>
        </li>
        <li>
            <Link href="/contact">
                <a>
                    <div>Contact</div>
                </a>
            </Link>
        </li>
    </ul>
)

export default ULNavLinks
