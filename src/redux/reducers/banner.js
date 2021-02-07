const initialState = {
    banner: true
};

const banner= (state = initialState, action) => {
    if (action.type === 'SET_BANNER') {
        return {
            ...state,
            banner : action.payload,
        };
    }
    return state;
};
export default banner;