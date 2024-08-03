
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navcontainer}>
            <nav className={styles.navbar}>
                <div className={styles.navtaskcontainer}>
                    <p className={styles.apptitle}>Waiter App</p>
                </div>
                <div className={styles.navbuttoncontainer}>
                    <ul className={styles.navlinks}>
                        <li><NavLink className={styles.homenav} to="/">Home</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;