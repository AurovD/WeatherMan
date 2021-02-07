import React from 'react';

const Aside = ({weather, currency, onClickBanner}) => {
    // (1 / currency.USD) * currency.RUB
    return (
        <aside className="blur aside">
            <div className="aside__block currency" onClick={() => onClickBanner(false)}>
                <h3>Валюта</h3>
                <div className="daily">
                    <div className="daily__box text">EUR</div>
                    <div className="daily__box  value">{currency ? Math.ceil((currency.RUB)*100)/100 : 0}</div>
                    <div className="daily__box text">USD</div>
                    <div className="daily__box  value">{currency ? Math.ceil(((1 / currency.USD) * currency.RUB)*100)/100 : 0}</div>
                    <div className="daily__box text">CNY</div>
                    <div className="daily__box  value">{currency ? Math.ceil(((1 / currency.CNY) * currency.RUB)*100)/100 : 0}</div>
                    <div className="daily__box text">UAH</div>
                    <div className="daily__box  value">{currency ? Math.ceil(((1 / currency.UAH) * currency.RUB)*100)/100 : 0}</div>
                </div>
            </div>
            <div className="aside__block weather" onClick={() => onClickBanner(true)}>
                <h3>Погода</h3>
                <div className="daily">
                    <div className="daily__box text">Утро</div>
                    <div className="daily__box  value">{weather ? Math.round(weather.temp.morn - 273.15) : 0} C</div>
                    <div className="daily__box text">День</div>
                    <div className="daily__box  value">{weather ? Math.round(weather.temp.day - 273.15) : 0} C</div>
                    <div className="daily__box text">Вечер</div>
                    <div className="daily__box  value">{weather ? Math.round(weather.temp.eve - 273.15) : 0} C</div>
                    <div className="daily__box text">Ночь</div>
                    <div className="daily__box  value">{weather ? Math.round(weather.temp.night - 273.15) : 0} C</div>
                </div>
            </div>
        </aside>
    );
}
export default Aside;