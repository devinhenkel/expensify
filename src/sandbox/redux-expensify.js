import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// add expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// remove expense
const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expenseDefaultState = []
const expenseReducer = (state = expenseDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                        ...state,
                        action.expense
                    ]; 
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) =>  id !== action.id );
        default: 
            return state;
    }
};

// set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// sort by date
// sort by amount
const sortExpenses = (sortBy = 'date') => ({
    type: 'SET_SORT',
    sortBy
});
// set start date
// set end date
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

const clearDate = () => ({
    type: 'CLEAR_DATE'
});

const filterDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'CLEAR_DATE':
            return {
                ...state,
                startDate: undefined,
                endDate: undefined
            };
        default: 
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});
const expenseArray = [];
expenseArray[0] = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
expenseArray[1] = store.dispatch(addExpense({ description: 'Shoes', amount: 30000 }));
expenseArray[2] = store.dispatch(addExpense({ description: 'Butt', amount: 25 }));

/* store.dispatch(removeExpense({ id: expenseArray[1].expense.id }));

store.dispatch(editExpense(expenseArray[0].expense.id, { amount: 50000, description: 'Farty party' }));

store.dispatch(setTextFilter('Butt'));
store.dispatch(setTextFilter());

store.dispatch(sortExpenses({ sortBy: 'amount'}));
store.dispatch(sortExpenses({ sortBy: 'date'})); */

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(1250));
store.dispatch(clearDate());

const demoState = {
    expenses: [{
        id: 'abcdef',
        description: 'Chocolate squirrel',
        note: 'Mmmm... Chocolate... Squirrel',
        amount: 45000,
        dateCreated: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


