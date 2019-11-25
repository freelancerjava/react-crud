export function addItem(item) {
    return {
        type: 'ADD_ITEM',
        payload: item
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        default:
            return state;
    }
}