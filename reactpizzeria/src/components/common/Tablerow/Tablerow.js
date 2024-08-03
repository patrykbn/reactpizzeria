import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Tablerow.module.scss';

const Tablerow = (props) => {
    const { tableNr, tableStatus, id , tableBill} = props;
    const tableNumber = tableNr.toString();

    return (
        <li className={styles.tablerow}>
            <div className={styles.tableinfo}>
                <p className={styles.table}>Table {tableNumber}</p>
                <span className={styles.status}>Status: </span>
                <span className={styles.currentstatus}>{tableStatus}</span>
                {tableStatus === 'Busy' && (
                    <span className={styles.bill}>Bill: ${tableBill}</span>
                )}
            </div>
            <div className={styles.tableinfo}>
                <Link to={`/table/${id}`} className={styles.morebutton}>Show more</Link>
            </div>
        </li>
    );
}

export default Tablerow;
