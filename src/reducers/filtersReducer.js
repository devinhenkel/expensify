import moment from 'moment';

//filters reducer
const filterDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    sortDirection: 1,
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_SORT_DIRECTION':
            return {
                ...state,
                sortDirection: action.sortDirection
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'CLEAR_DATE':
            return {
                ...state,
                startDate: undefined,
                endDate: undefined
            };
        default: 
            return state;
    }
};