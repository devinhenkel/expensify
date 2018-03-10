// set text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// sort by date
// sort by amount
export const setSort = (sortBy = 'date') => ({
    type: 'SET_SORT',
    sortBy
});

export const setSortDirection = (sortDirection = 1) => ({
    type: 'SET_SORT_DIRECTION',
    sortDirection
});
// set start date
// set end date
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

export const clearDate = () => ({
    type: 'CLEAR_DATE'
});
