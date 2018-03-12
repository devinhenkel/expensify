import {setStartDate, setEndDate, setTextFilter, setSort, setSortDirection} from '../../actions/filtersActions';
import moment from 'moment';

test('Should generate setStartDate object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('Should generate setEndDate object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Should set filter text', () => {
    const action = setTextFilter('Fart');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Fart'
    })
});

test('Should set filter blank text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('Should set sort property to amount', () => {
    const action = setSort('amount');
    expect(action).toEqual({
        type: 'SET_SORT',
        sortBy: 'amount'
    })
});

test('Should set sort property to date', () => {
    const action = setSort('date');
    expect(action).toEqual({
        type: 'SET_SORT',
        sortBy: 'date'
    })
});

test('Should set sort property to date by default', () => {
    const action = setSort();
    expect(action).toEqual({
        type: 'SET_SORT',
        sortBy: 'date'
    })
});

test('Should set sort direction to -1', () => {
    const action = setSortDirection(-1);
    expect(action).toEqual({
        type: 'SET_SORT_DIRECTION',
        sortDirection: -1
    })
});