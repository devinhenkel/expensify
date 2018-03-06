import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// add expense
const addExpense = ({ description = '', note = '', amount = 0, dateCreated = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        dateCreated
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

const setSortDirection = (sortDirection = 1) => ({
    type: 'SET_SORT_DIRECTION',
    sortDirection
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
    sortDirection: 1,
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
        case 'SET_SORT_DIRECTION':
            return {
                ...state,
                sortDirection: action.sortDirection
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

const filterExpenses = (expenses, {text, sortBy, sortDirection, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.dateCreated >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.dateCreated <= endDate;
        const textMatch = typeof text.length > 0 || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.dateCreated < b.dateCreated ? sortDirection : -sortDirection;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? sortDirection : -sortDirection;
        }
        
    });
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = filterExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
const expenseArray = [];
expenseArray[0] = store.dispatch(addExpense({ description: 'Rent', amount: 100, dateCreated: 1000}));
expenseArray[1] = store.dispatch(addExpense({ description: 'Shoes', amount: 30000, dateCreated: 0 }));
expenseArray[2] = store.dispatch(addExpense({ description: 'Butt', amount: 25, dateCreated: -1000 }));

// store.dispatch(removeExpense({ id: expenseArray[1].expense.id }));

// store.dispatch(editExpense(expenseArray[0].expense.id, { amount: 50000, description: 'Farty party' }));

// store.dispatch(setTextFilter('Butt'));
// store.dispatch(setTextFilter());

store.dispatch(setSortDirection(-1));
store.dispatch(sortExpenses('date'));
//console.log(store.getState());
// store.dispatch(sortExpenses({ sortBy: 'date'})); 

//store.dispatch(setStartDate(-100));
//store.dispatch(setEndDate(750));
//store.dispatch(clearDate());

//store.dispatch(setTextFilter('shoe'));

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
        sortDirection: 1,
        startDate: undefined,
        endDate: undefined
    }
};


