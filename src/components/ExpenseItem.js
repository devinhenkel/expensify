import React from 'react';

const ExpenseItem = ({id, description, amount, dateCreated}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {dateCreated}</p>
    </div>

);

export default ExpenseItem;