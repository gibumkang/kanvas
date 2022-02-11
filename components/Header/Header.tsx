import Navbar from './Navbar/Navbar'

import styles from "../../styles/Header.module.css"

const Header = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div>
            <div>Search Icon</div>
            <div>Side Menu</div>
            </div>
        </div>
    )
}

export default Header
