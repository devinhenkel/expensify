import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


// action generators - actions that return action objects



const incrementCount = ( { incrementBy = 1} = {} ) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ( { count }) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET'
});

// reducers
// 1. reducers are pure functions - output is only determined by the input
// 2. never changes state or action


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

/* store.dispatch(
    {
        type: 'INCREMENT',
        incrementBy: 5
    }
); */
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount({incrementBy: 3}));

store.dispatch(resetCount());
 
store.dispatch(decrementCount({decrementBy: 3}));
 
store.dispatch(setCount({count: 203}));

const addIncrement = () => {
    store.dispatch(incrementCount({incrementBy: 3}));
    getCount();
}

const getCount = () => {
    return store.getState().count;
}

const counterDom = (
    <div>
        <p>Count: {getCount()}</p>
        <button onClick={addIncrement}>Add One</button>
    </div>
);

const approot = document.getElementById('app');
ReactDOM.render(counterDom, approot)