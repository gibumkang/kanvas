import Navbar from './Navbar/Navbar'

import styles from '../../../styles/Header.module.css'
import IconBar from './IconBar/IconBar'
import { MainContext } from '../../../hooks/MainContext';
import { useContext } from 'react';
import Logo from './Logo/Logo';

const Header = () => {

    const { view : { Navigation : { currentPage } } } = useContext(MainContext);

    return (
        <div className={styles.container}>
            <div>
            { currentPage === "HOME" ? null : <Logo /> }
            <Navbar />
            </div>
            <IconBar />
        </div>
    )
}

export default Header
