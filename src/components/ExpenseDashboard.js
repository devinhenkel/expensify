import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = () => (
    <div>
        <ExpenseListFilters default="hello"/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboard;