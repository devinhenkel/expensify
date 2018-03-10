import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setSort, setSortDirection, setStartDate, setEndDate } from '../actions/filtersActions';


class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };
    render(){
        return(
            <div>

                <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />

                <select 
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    this.props.dispatch(setSort(e.target.value));
                }}>
                    <option value="date" default>Date</option>
                    <option value="amount">Amount</option>
                </select>

                Descending: 
                <input 
                type="checkbox" 
                checked={this.props.filters.sortDirection===1} 
                onChange={(e) => {
                    this.props.dispatch(setSortDirection(e.target.checked ? 1 : -1));
                }}/>

                <p></p>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    startDateId='foo'
                    endDateId='bar'
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);