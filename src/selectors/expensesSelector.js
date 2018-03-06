//show visible expenses

export default (expenses, {text, sortBy, sortDirection, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.dateCreated >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.dateCreated <= endDate;
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

