import './style.css';
import APIkey from './APIFile.txt';

// document selectors

const submitForm = document.querySelector('#searchform');
const citySelector = document.querySelector('#city');
const temperatureSelector = document.querySelector('#temperature');
const feelsLikeSelector = document.querySelector('#feelsLike');
const humiditySelector = document.querySelector('#humidity');
const windSelector = document.querySelector('#wind');
const elementSelector = document.querySelector('.element');


class DataFromApi {
    constructor(city, temperature, feelsLike, humidity, wind) {
        this.city = city;
        this.temperature = temperature ;
        this.feelsLike = feelsLike;
        this.humidity = humidity;
        this.wind = wind;
    }
}

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = document.querySelector('.input').value;
    const linkToApi = `http://api.weatherapi.com/v1/current.json?key=${ APIkey }&q=${ cityName }`;

    fetch(linkToApi)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status); // Throw an error with the HTTP status code
            }
            return response.json();
        })
        .then(data => {
            const dataConverted = new DataFromApi(data.location.name,data.current.temp_c,
                data.current.feelslike_c, data.current.humidity, data.current.wind_kph);
            return dataConverted;
        })
        .then( dataConverted => {
            citySelector.textContent = `City : ${ dataConverted.city}`;
            temperatureSelector.textContent = `Temperature : ${ dataConverted.temperature}`;
            feelsLikeSelector.textContent = `Temperature feels like : ${ dataConverted.feelsLike}`;
            humiditySelector.textContent = `Humidity : ${ dataConverted.humidity }%`;
            windSelector.textContent = `Wind speed : ${ dataConverted.wind } kmh`;

            elementSelector.style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});