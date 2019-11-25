import { combineReducers } from 'redux';

import initialState from './initialState';
import { reducer as addItem } from './addItem';
import { reducer as deleteItem } from './deleteItem';
import { reducer as editItem } from './editItem';
// import { reducer as loadAmazonProductReducer } from './loadAmazonProduct';
// import { reducer as setQueryReducer } from './setQuery';

const reducers = [
    addItem,
    deleteItem,
    editItem,
    // loadAmazonProductReducer,
    // setQueryReducer,
];

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        // Handle cross-topic actions here
        default:
            newState = state;
            break;
    }
    /* istanbul ignore next */
    return reducers.reduce((s, r) => r(s, action), newState);
}

const reducerMap = {
    reducer
};

export default combineReducers(reducerMap);