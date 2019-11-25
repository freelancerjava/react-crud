export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        payload: id
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter((item)=>{
                    return item.id !== action.payload
                })
            };

        default:
            return state;
    }
}