import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact>Dashboard</NavLink>
        <NavLink to="/add" activeClassName="isActive">Add Expense</NavLink>
        <NavLink to="/help" activeClassName="isActive">Help</NavLink> 
    </header>
);

export default Header;