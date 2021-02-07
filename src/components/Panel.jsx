import React from 'react';
import {useDispatch, useSelector,} from "react-redux";
import {setCategory} from "../redux/actions/category";
var classNames = require('classnames');

let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

let months = ['янв', 'фев', 'мар', 'апр','май', 'июн', 'июл', 'авг','сен', 'окт', 'ноя', 'дек'];
let values = ["EUR", "USD", "CNY", "UAH"];

const Categories = React.memo(function Categories({onClickCategory, activeCategory}) {
    return (
        <div className="categories">
            <ul>
                {values.map((name, index = 0) => (
                    <li className={activeCategory.category === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={`${name}_${index}`}>{name}</li>
                ))}
            </ul>
        </div>
    )
});

const Panel = ({timezone, current, currency, banner}) => {
    const dispatch = useDispatch();
    let time = new Date()
    const category= useSelector(({category}) => category);
    const [number, setNumber] = React.useState(1);
    const [sum, setSum] = React.useState(0);
    let curs = [];
    if(currency) {
        curs = [Math.ceil((currency.RUB)*100)/100, Math.ceil(((1 / currency.USD) * currency.RUB)*100)/100, Math.ceil(((1 / currency.CNY) * currency.RUB)*100)/100, Math.ceil(((1 / currency.UAH) * currency.RUB)*100)/100]
    }

    let getMin = () => {
        let min = time.getMinutes();
        if(time.getMinutes() < 10) {
            return "0" + min;
        } else {
            return min;
        }
    }
    const [text, setText] = React.useState(`${time.getHours()}:${getMin()} - ${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]} '${time.getFullYear() % 100}`);
    let getTime = () => {
        let string = `${time.getHours()}:${getMin()} - ${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]} '${time.getFullYear() % 100}`;
        setText(string);
    };
    let getSum= () => {
        return curs[category] * number
    };
    React.useEffect(() => {
        setInterval(() => getTime(), 60000)
    }, [getTime]);

    React.useEffect(() => {
        setSum(curs[category, category.category] * Number(number))
    }, [setSum, curs]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [dispatch]);


    return (
        banner ?
        <div className="panel">
            <h2>{current ? Math.round(current.temp - 273.15) : 0}</h2>
            <div className="panelPart panel__location">
                <p className="city">{timezone ? timezone.split('/')[1] : "MOSCOW"}</p>
                <p className="time">{text}</p>
            </div>
            <div className="panelPart panel__weather">
                <img src={`http://openweathermap.org/img/wn/${current ? current.weather[0].icon : "01d"}@2x.png`} alt="weather"></img>
                <p>{current ? current.weather[0].description : 0}</p>
            </div>
        </div> :
    <div className="panel currancy">
        <Categories activeCategory = {category ? category : 67} onClickCategory={onSelectCategory}/>
        <form action="">
            <input type="number" id="num_count" name="quantity" placeholder="1" onChange={e => setNumber(e.target.value)}/>
        </form>
        <p>{`Сумма: ${Math.ceil((sum)*100)/100} руб`}</p>
    </div>
    );
}
export default Panel;