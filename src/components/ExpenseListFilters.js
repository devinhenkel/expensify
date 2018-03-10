import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setSort, setSortDirection } from '../actions/filtersActions';

const ExpenseListFilters = (props) => (
    <div>

        <input 
        type="text" 
        value={props.filters.text} 
        onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }} />

        <select 
        value={props.filters.sortBy}
        onChange={(e) => {
            props.dispatch(setSort(e.target.value));
        }}>
            <option value="date" default>Date</option>
            <option value="amount">Amount</option>
        </select>

        Descending: 
        <input 
        type="checkbox" 
        checked={props.filters.sortDirection===1} 
        onChange={(e) => {
            props.dispatch(setSortDirection(e.target.checked ? 1 : -1));
        }}/>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);