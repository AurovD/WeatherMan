import React from 'react';
import {Aside, Panel} from "./components";
import {useDispatch, useSelector,} from "react-redux";
import {getWeatherData} from "./redux/actions/data";
import {getCurrencyData} from "./redux/actions/currency";
import {clearSky, mist, thunder, brokenClouds, fewClouds, rain, scatteredClouds, showerRain, snow} from "./img";
import {setBanner} from "./redux/actions/banner";

let bg = {
    "01d": clearSky,
    "02d": fewClouds,
    "03d": scatteredClouds,
    "04d": brokenClouds,
    "09d": showerRain,
    "10d": rain,
    "11d": thunder,
    "13d": snow,
    "50d": mist,
    "01n": clearSky,
    "02n": fewClouds,
    "03n": scatteredClouds,
    "04n": brokenClouds,
    "09n": showerRain,
    "10n": rain,
    "11n": thunder,
    "13n": snow,
    "50n": mist
}

function App() {
    const dispatch = useDispatch();
    let text = "";
    const weatherData = useSelector(({data}) => data.data);
    const isLoaded = useSelector(({data}) => data.isLoaded);
    const curData = useSelector(({currency}) => currency.data);
    const isLoadedCur = useSelector(({currency}) => currency.isLoadedCur);
    const banner = useSelector(({banner}) => banner.banner);
    if(isLoaded) {
        console.log(weatherData)
        text = weatherData.current.weather[0].icon;
    }
    // if(isLoadedCur) {
    //     console.log(curData);
    // }

    React.useEffect(() => {
        dispatch(getWeatherData());
    }, [dispatch]);
    React.useEffect(() => {
        dispatch(getCurrencyData());
    }, [dispatch]);

    let img =  (text) => {
        for (let image in bg) {
            if(image === text) {
                return bg[image]
            }
        }
    }

    const onSelectBanner = React.useCallback((value) => {
        dispatch(setBanner(value));
    }, [dispatch]);


    return (
    <div className="wrapper alpha" style={{backgroundImage: `url("${snow}")`}}>
        <Panel timezone={isLoaded ? weatherData.timezone : null}
               current={isLoaded ? weatherData.current : 0}
               currency={isLoadedCur ? curData.rates : null}
               banner={banner}
        />
        <Aside weather={isLoaded ? weatherData.daily[0] : null}
               currency={isLoadedCur ? curData.rates : null}
               onClickBanner={onSelectBanner}
        />
    </div>
    );
}

export default App;
