import { addExpense, editExpense, removeExpense } from '../../actions/expensesActions';

test('Should setup remove expense action.', () => {
    const action = removeExpense({id: 'abcd1234'});
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: 'abcd1234'});
});

test('Should setup edit expense action.', () => {
    const expense = { note: 'Fart' };
    const action = editExpense('abcd1234', expense);
    expect(action).toEqual({type: 'EDIT_EXPENSE', id: 'abcd1234', updates: {note: 'Fart'}});
});

test('Should setup add expense action', () => {
    const expenseData = {
        description: 'Fart',
        amount: 1234,
        dateCreated: 1000,
        note: 'P.U.'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
    
});

test('Should setup add expense with default data', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            dateCreated: 0,
            id: expect.any(String)
        }
    })
});