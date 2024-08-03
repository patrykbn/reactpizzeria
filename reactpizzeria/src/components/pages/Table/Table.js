import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getTableById } from '../../../redux/tablesRedux';
import StatusSelect from '../../features/StatusSelect/StatusSelect';
import PeopleInput from '../../features/PeopleInput/PeopleInput';
import BillInput from '../../features/BillInput/BillInput';
import styles from './Table.module.scss';
import {
    handleUpdate,
    handleStatusChange,
    handleCurrentPeopleChange,
    handlePeopleMaxChange,
    handleBillChange
} from '../../../utils/tablesUtils'

const Table = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const table = useSelector(state => getTableById(state, id));

    const [status, setStatus] = useState('');
    const [currentPeople, setCurrentPeople] = useState(0);
    const [peopleMax, setPeopleMax] = useState(1);
    const [bill, setBill] = useState(0);

    useEffect(() => {
        if (table) {
            setStatus(table.tableStatus);
            setCurrentPeople(Math.max(0, Math.round(table.peopleCurrent)));
            setPeopleMax(Math.max(1, Math.round(table.peopleMax)));
            setBill(Math.max(0, parseInt(table.bill)));
        }
    }, [table]);

    if (!table) return <Navigate to="/" />

    return (
        <div className={styles.maincontainer}>
            <div className={styles.tableinfocontainer}>
                <div className={styles.tabletitlecontainer}>
                    <span className={styles.tabletitle}>Table {table.tableNr}</span>
                </div>
                <StatusSelect 
                    value={status} 
                    onChange={(value) => handleStatusChange(value, setStatus, setCurrentPeople, setBill)}/>
                <PeopleInput 
                    currentPeople={currentPeople}
                    peopleMax={peopleMax}
                    onCurrentPeopleChange={(value) => handleCurrentPeopleChange(value, setCurrentPeople, setStatus)}
                    onPeopleMaxChange={(value) => handlePeopleMaxChange(value, setPeopleMax)}
                />
                <BillInput 
                    value={bill}
                    onChange={(value) => handleBillChange(value, setBill, setStatus)}
                />
                <div className={styles.buttoncontainer}>
                    <a href="/#" className={styles.updatebutton}
                    onClick={(e) => handleUpdate(e, table, status, currentPeople, peopleMax, bill, dispatch)}>
                    Update
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Table;
