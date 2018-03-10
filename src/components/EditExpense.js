import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expensesActions';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Edit Expense {props.match.params.id && 'ID: ' + props.match.params.id}</h3>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) =>{
                    console.log(expense);
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <p></p>
            <button id={props.expense.id} onClick={(e) => {
                props.dispatch(removeExpense({ id: props.expense.id })); 
                props.history.push('/'); 
            }}>Delete Expense</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(EditExpense);