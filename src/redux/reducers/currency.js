const initialState = {
    data: "",
    isLoadedCur: false
};

const currency = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENCY':
            return {
                ...state,
                data: action.data,
                isLoadedCur: true,
            };
        default:
            return state;
    }
};
export default currency;