import './style.css';
import APIkey from './APIFile.txt';

// document selectors

const submitForm = document.querySelector('#searchform');

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

console.log(APIkey);