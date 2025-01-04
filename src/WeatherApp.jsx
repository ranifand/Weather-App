import SearchBox from './SearchBox';
import './SearchBox.css'
import InfoBox from "./InfoBox";
import "./InfoBox.css"
import { useState } from 'react';

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 28.39,
        humidity: 15,
        maxTemp: 30.31,
        minTemp: 30.31,
        temp: 30.31,
        weather: "few clouds",
    })

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateWeatherInfo={updateWeatherInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}