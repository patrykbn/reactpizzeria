import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getTableById, updateTableThunk } from '../../../redux/tablesRedux';
import StatusSelect from '../../features/StatusSelect/StatusSelect';
import PeopleInput from '../../features/PeopleInput/PeopleInput';
import BillInput from '../../features/BillInput/BillInput';
import styles from './Table.module.scss';
import {
    handleStatusChange,
    handleCurrentPeopleChange,
    handlePeopleMaxChange,
    handleBillChange
} from '../../../utils/tablesUtils'

const Table = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const table = useSelector(state => getTableById(state, id));

    const [tableStatus, setTableStatus] = useState('');
    const [currentPeople, setCurrentPeople] = useState(0);
    const [peopleMax, setPeopleMax] = useState(1);
    const [bill, setBill] = useState(0);
    const [tableNr, setTableNr] = useState('')

    useEffect(() => {
        if (table) {
            setTableStatus(table.tableStatus);
            setCurrentPeople(Math.max(0, Math.round(table.peopleCurrent)));
            setPeopleMax(Math.max(1, Math.round(table.peopleMax)));
            setBill(Math.max(0, parseInt(table.bill)));
            setTableNr(table.tableNr);
        }
    }, [table]);

    if (!table) return <Navigate to="/" />

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateTableThunk({
            id,
            tableNr,
            tableStatus,
            peopleCurrent: currentPeople,
            peopleMax: peopleMax,
            bill
        }));
    };

    return (
        <div className={styles.maincontainer}>
            <div className={styles.tableinfocontainer}>
                <div className={styles.tabletitlecontainer}>
                    <span className={styles.tabletitle}>Table {table.tableNr}</span>
                </div>
                <StatusSelect 
                    value={tableStatus} 
                    onChange={(value) => handleStatusChange(value, setTableStatus, setCurrentPeople, setBill)}/>
                <PeopleInput 
                    currentPeople={currentPeople}
                    peopleMax={peopleMax}
                    onCurrentPeopleChange={(value) => handleCurrentPeopleChange(value, setCurrentPeople, setTableStatus, peopleMax)}
                    onPeopleMaxChange={(value) => handlePeopleMaxChange(value, setPeopleMax)}
                />
                {table.tableStatus === 'Busy' && (
                    <BillInput 
                    value={bill}
                    onChange={(value) => handleBillChange(value, setBill, setTableStatus)}
                />
                )}
                
                <div className={styles.buttoncontainer}>
                    <a href="/" className={styles.updatebutton}
                    onClick={(e) => handleUpdate(e, tableNr, tableStatus, currentPeople, peopleMax, bill, dispatch)}>
                    Update
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Table;
