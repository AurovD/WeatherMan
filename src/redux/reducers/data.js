const initialState = {
    data: "",
    isLoaded: false
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                data: action.data,
                isLoaded: true,
            };
        default:
            return state;
    }
};
export default data;