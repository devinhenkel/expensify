//show visible expenses
import moment from 'moment';

export default (expenses, {text, sortBy, sortDirection, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const dateMoment = moment(expense.dateCreated);
        const startDateMatch = startDate ? startDate.isSameOrBefore(dateMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(dateMoment, 'day') : true;
        const textMatch = typeof text.length > 0 || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.dateCreated < b.dateCreated ? sortDirection : -sortDirection;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? sortDirection : -sortDirection;
        }
        
    });
};

