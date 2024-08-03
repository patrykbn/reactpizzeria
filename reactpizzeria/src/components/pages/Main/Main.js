import styles from './Main.module.scss';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import Tablerow from '../../common/Tablerow/Tablerow';

const Main = () => {

    const tables = useSelector(state => getAllTables(state))

    return (
        <div className={styles.appwindow}>
            <div className={styles.appcontainer}>
                <span className={styles.apptitle}>All Tables:</span>
            </div>
            <div className={styles.tablescontainer}>
                <ul>
                    {tables.map(table => <Tablerow key={table.id} id={table.id} tableNr={table.tableNr} tableStatus={table.tableStatus} tableBill={table.bill}/>)}
                </ul>
            </div>
        </div>
    )
}

export default Main