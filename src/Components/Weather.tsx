import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface WeatherDetailsProps {
    lat: number;
    lon: number;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ lat, lon }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9f41b845dce5349612f3f7dea02c547a`);
                setWeatherData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching weather data');
                setLoading(false);
            }
        };

        fetchWeatherData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lat, lon]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!weatherData) return null;

    const { name, main, weather } = weatherData;

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Weather in {name}</h2>
            <p>Temperature: {main.temp} °C</p>
            <p>Feels like: {main.feels_like} °C</p>
            <p>Description: {weather[0].description}</p>
            <p>Min Temperature: {main.temp_min} °C</p>
            <p>Max Temperature: {main.temp_max} °C</p>
            <p>Pressure: {main.pressure} hPa</p>
            <p>Humidity: {main.humidity}%</p>
            {/* Display other weather details as needed */}
        </div>
    );
};

export default WeatherDetails;



