import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footercontainer}>
            <span className={styles.footertext}>Copyright © PizzeriaApp 2024</span>
        </div>
    )
}

export default Footer;