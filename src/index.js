import "./styles.css";
import { displayTodaysForecast, display7DayForecast } from "./display-forecast.js";
import { convertTempUnit, convertTemp } from "./unit-conversion.js";

const searchBtn = document.querySelector('.search');
const unitConvBtn = document.querySelector('.unit-conv');


searchBtn.addEventListener('click', () => {
    const city = document.querySelector('#city');
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=us&key=WECT3BE9NPYPN9HXTBNYJMZUR&contentType=json`;
    console.log(city.value)
    console.log(url)
    getWeatherData(url);
    unitConvBtn.classList.remove('hide');
});

async function getWeatherData(url) {
    try {
        const response = await fetch (url);
        const data = await response.json();
        console.log(data)
        displayTodaysForecast(data);
        display7DayForecast(data);
    } catch (error) {
        console.error(error.message)
    }
};

unitConvBtn.addEventListener('click', () => {  
    convertTemp();
    convertTempUnit();
    //convertDistance();
    //convertDistanceUnit();
});

// async function getWeatherData() {
//     try {
//         const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/oklahoma%20city?unitGroup=us&key=WECT3BE9NPYPN9HXTBNYJMZUR&contentType=json');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error.message)
//     }
// };

// getWeatherData();
