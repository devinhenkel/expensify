import React from 'react';
import { Switch, Link, NavLink, BrowserRouter, Route } from 'react-router-dom'
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseHelp from '../components/ExpenseHelp';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact />
                <Route path="/help" component={ExpenseHelp} exact />
                <Route path="/edit/:id?" component={EditExpense} />
                <Route path="/add" component={AddExpense} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;