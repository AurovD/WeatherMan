export const getWeatherData= () => async (dispatch) => {
    await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=55.751244&lon=37.618423&exclude=hourly,minutely&appid=462ab2be8e62cd6725aae04423bbe41b').then((res) => {
        return res.json();
    }).then(json => {
        dispatch(getListTasks(json));
    });
};
export const getListTasks = (data) => ({
    type: 'SET_WEATHER',
    data: data,
});