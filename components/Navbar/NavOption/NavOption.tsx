import Link from 'next/link'
import { useContext } from 'react'
import { MainContext } from '../../../hooks/MainContext'

import styles from '../../../styles/NavOption.module.css'

interface INavOptionProps {
    page?: String
}

const NavOption = ({ page }: INavOptionProps) => {
    const { view : { Navigation : { currentPage } }, changePage } = useContext(MainContext);

    const isCurrentPage = currentPage === page;

    const onClickChangePageHandler = () => {
        changePage(page);
    }

    return (
        <div className={styles.container}>
            {isCurrentPage ? <div className={styles.selected}></div> : <div className={styles.unselected}></div>}
            <Link href={`${page === 'HOME' ? '/' : `/${page.toLowerCase()}`}`}>
                <a onClick={onClickChangePageHandler}>{page}</a>
            </Link>
        </div>
    )
}

export default NavOption
