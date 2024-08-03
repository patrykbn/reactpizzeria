import { updateTable } from "../redux/tablesRedux";

export const handleUpdate = (e, table, status, currentPeople, peopleMax, bill, dispatch) => {
    e.preventDefault();

    if (isNaN(currentPeople) || isNaN(peopleMax) || isNaN(bill)) {
        window.alert('All values must be numeric');
        return;
    }

    if(currentPeople > peopleMax) {
        window.alert('Exceded maximum people currently at the table');
        return;
    }

    const updatedTable = {
        id: table.id,
        tableStatus: status,
        peopleCurrent: currentPeople,
        peopleMax: peopleMax,
        bill: parseInt(bill),
    };

    dispatch(updateTable(updatedTable));
};

export const handleStatusChange = (value, setStatus, setCurrentPeople, setBill) => {
    setStatus(value);

    if(value === 'Free' || value === 'Cleaning') {
        setCurrentPeople(0);
        setBill(0);
    }
};

export const handleCurrentPeopleChange = ( value, setCurrentPeople, setStatus) => {
    if (isNaN(value)) {  
        setCurrentPeople(0) 
    } else if (value >= 1 ) {
        setCurrentPeople(value);
        setStatus('Busy')
    } else {
        setCurrentPeople(value);
    }
};

export const handlePeopleMaxChange = (value, setPeopleMax) => {
    if (isNaN(value) || value < 1) {
        setPeopleMax(2)
    } else {
    setPeopleMax(parseInt(value));
    }
};

export const handleBillChange = (value, setBill, setStatus) => {
    if (isNaN(value) || value < 0 ){
        setBill(0)
    } else {
        setBill(value);
        setStatus('Busy')
    }
}