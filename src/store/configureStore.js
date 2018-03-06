import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expensesReducer';
import filterReducer from '../reducers/filtersReducer'
// initialize store

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        })
    );
    return store;
}