import NavOption from './NavOption/NavOption';

import styles from "../../../../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <NavOption page="HOME" />
            <NavOption page="SERVICES" />
            <NavOption page="GALLERY" />
            <NavOption page="CLIENTS" />
            <NavOption page="STORY" />
            <NavOption page="CONTACT" />
        </nav>
    )
}

export default Navbar
