import Navbar from './Navbar/Navbar'

import styles from "../../styles/Header.module.css"
import IconBar from './IconBar/IconBar'

const Header = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <IconBar />
        </div>
    )
}

export default Header
