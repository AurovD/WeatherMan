const initialState = {
    category: 0
};

const category= (state = initialState, action) => {
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload,
        };
    }
    return state;
};
export default category;