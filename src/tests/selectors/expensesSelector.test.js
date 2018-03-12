import selectExpenses from '../../selectors/expensesSelector';
import moment from 'moment';

const expenses = [
    {
        id: '1234',
        description: 'abc',
        note: '',
        amount: 100,
        dateCreated: 0
    },
    {
        id: '2345',
        description: 'bcd',
        note: '',
        amount: 200,
        dateCreated: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3456',
        description: 'cde',
        note: '',
        amount: 300,
        dateCreated: moment(0).add(4, 'days').valueOf()
    }
];

test('Should filter by text value', () => {
    const filters = {
        text: 'b',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[0], expenses[1]
    ])
});

test('Should filter by startDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        sortDirection: -1,
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[0], expenses[2]
    ])
});

test('Should filter by endDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        sortDirection: -1,
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[1], expenses[0]
    ])
});



test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        sortDirection: 1,
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[1], expenses[0]
    ])
});