import './style.css';
import APIkey from './APIFile.txt';

// document selectors

const submitForm = document.querySelector('#searchform');
const citySelector = document.querySelector('.city');
const temperatureSelector = document.querySelector('.temperature');
const feelsLikeSelector = document.querySelector('.feelsLike');
const humiditySelector = document.querySelector('.humidity');
const windSelector = document.querySelector('.wind');
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
    let cityName = document.querySelector('.input').value;
    cityName = 'Warsaw';
    const linkToApi = `http://api.weatherapi.com/v1/current.json?key=${ APIkey }&q=${ cityName}`;
    console.log(linkToApi);
    fetch(linkToApi)
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.location.name);
            const dataConverted = new DataFromApi(data.location.name,data.current.temp_c,
                data.current.feelslike_c, data.current.humidity, data.current.wind_kph);
            console.log(dataConverted);
        })
        .catch(err => console.log(err));
});





console.log(APIkey);