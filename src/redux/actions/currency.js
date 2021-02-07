export const getCurrencyData = () => async (dispatch) => {
    // 1512902b51c707fcee6622e782c9d14f
    await fetch('http://data.fixer.io/api/latest?access_key=1512902b51c707fcee6622e782c9d14f').then((res) => {
        return res.json();
    }).then(json => {
        dispatch(getCurrency(json))
    });
};
export const getCurrency = (data) => ({
    type: 'SET_CURRENCY',
    data: data,
});