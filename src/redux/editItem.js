export function editItem(id) {
    return {
        type: 'EDIT_ITEM',
        payload: id
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case 'EDIT_ITEM':
            state.items.map((item)=>{
                if(item.id === action.payload){
                    item.name = action.payload.name
                    item.age = action.payload.age
                    item.sex = action.payload.sex
                }
                return true
            })

            return {
                ...state
            };

        default:
            return state;
    }
}