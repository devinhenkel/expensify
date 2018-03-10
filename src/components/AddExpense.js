import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensesActions';

const AddExpense = (props) => (
    <div>
        <h3>Add Expense</h3>
        <ExpenseForm
            onSubmit={(expense) =>{
                console.log(expense);
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpense);