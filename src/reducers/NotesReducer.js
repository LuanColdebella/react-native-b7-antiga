const initialState = {
    list:[
        {title: 'Primeira nota', body: 'Testando 123...'},
    ]
};

export default (state = initialState, action) => {

    switch(action.type){
        case 'ADD_NOTE':
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case 'UPDATE_NOTE':
            return {
                ...state,
                list: state.list.map((item, index) => index === action.payload.key ? {...item, ...action.payload} : item)
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                list: state.list.filter((item, index) => index !== action.payload.key)
            };
        default:
            return state;
    }
}