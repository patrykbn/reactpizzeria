import { API_URL } from '../config';

// selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);

// action types
const createActionName = actionName => `app/tables/${actionName}`;
const ADD_TABLE = createActionName('ADD_TABLE');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const FETCH_TABLES = createActionName('FETCH_TABLES');

// action creators
export const addTable = payload => ({ type: ADD_TABLE, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const fetchTables = payload => ({ type: FETCH_TABLES, payload });

// thunk creator for fetching tables
export const fetchTablesThunk = () => async dispatch => {
  try {
    const response = await fetch(`${API_URL}/tables`);
    const data = await response.json();
    console.log('Fetched tables data:', data); // Log fetched data
    dispatch(fetchTables(data));
  } catch (error) {
    console.error('Error fetching tables:', error);
  }
};

// thunk creator for updating a table
export const updateTableThunk = (table) => async dispatch => {
  const { id, tableNr, tableStatus, peopleCurrent, peopleMax, bill } = table;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      id,
      tableNr: parseInt(tableNr),
      tableStatus,
      peopleCurrent: parseInt(peopleCurrent),
      peopleMax: parseInt(peopleMax),
      bill: parseInt(bill),
    })
  };

  try {
    const response = await fetch(`${API_URL}/tables/${id}`, options);
    if (response.ok) {
      const updatedTable = await response.json();
      dispatch(updateTable(updatedTable));
    } else {
      console.error('Failed to update table:', response.statusText);
    }
  } catch (error) {
    console.error('Error updating table:', error);
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return statePart.map(table =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    case FETCH_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
