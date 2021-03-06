import uuid from 'uuid';

// add expense
export const addExpense = ({ description = '', note = '', amount = 0, dateCreated = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        dateCreated
    }
});
// remove expense
export const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});