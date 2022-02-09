import Link from "next/link";

const Navbar = () => {
    return (
    <nav>
    <Link href="/">
        <a>HOME</a>
    </Link>
    <Link href="/services">
        <a>SERVICES</a>
    </Link>
    <Link href="/gallery">
        <a>GALLERY</a>
    </Link>
    <Link href="/clients">
    <a>CLIENTS</a></Link>
    <Link href="/story"><a>STORY</a></Link>
    <Link href="/contact"><a>CONTACT</a></Link>
    </nav>);
}

export default Navbar;