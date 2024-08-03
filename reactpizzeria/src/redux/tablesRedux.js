import shortid from 'shortid';

// selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);

// action types
const createActionName = actionName => `app/tables/${actionName}`;
const ADD_TABLE = createActionName('ADD_TABLE');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const addTable = payload => ({ type: ADD_TABLE, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...statePart, { ...action.payload, id: shortid() }];
    case UPDATE_TABLE:
      return statePart.map(table =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};

export default tablesReducer;
