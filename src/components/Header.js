import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact>Home</NavLink>
        <NavLink to="/help" activeClassName="isActive">Help</NavLink> 
        <NavLink to="/add" activeClassName="isActive">Add</NavLink>
        <NavLink to="/edit" activeClassName="isActive">Edit</NavLink>
    </header>
);

export default Header;