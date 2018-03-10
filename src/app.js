import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

import {addExpense, removeExpense, editExpense} from './actions/expensesActions';
import expenseReducer from './reducers/expensesReducer';
import {setTextFilter} from './actions/filtersActions';
import filterReducer from './reducers/filtersReducer';
import filterExpenses from './selectors/expensesSelector';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = filterExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseArray = [];
expenseArray[0] = store.dispatch(addExpense({ description: 'Water Bill', amount: 100, dateCreated: 1000}));
expenseArray[1] = store.dispatch(addExpense({ description: 'Shoes', amount: 30000, dateCreated: 0 }));
expenseArray[2] = store.dispatch(addExpense({ description: 'Butt bill', amount: 25, dateCreated: -1000 }));
store.dispatch(setTextFilter(''));

/* setTimeout(() => {
    expenseArray[2] = store.dispatch(addExpense({ description: 'Sniffy whiffy', amount: 325, dateCreated: 750 }));
  }, 5000); */


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    
);

const approot = document.getElementById('app');
ReactDOM.render(jsx, approot)
  
