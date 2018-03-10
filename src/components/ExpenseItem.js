import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expensesActions';

const ExpenseItem = ({dispatch, id, description, amount, note, dateCreated}) => (
    <div>
        <Link to={`/edit/${id}`}><h4>{description}</h4></Link>
        {note && <p>{note}</p>}
        <p>Amount: {amount/100} Created: {dateCreated}</p>
        <button id={id} onClick={(e) => {
                dispatch(removeExpense({ id }));  
        }}>X</button>
    </div>

);



export default connect()(ExpenseItem);