import { format } from "date-fns";
import { getWeatherIcon, getWindDirection } from "./display-helpers.js"

export function displayTodaysForecast(data) {
    const icon = getWeatherIcon(data.currentConditions.icon);
    const direction = getWindDirection(data.currentConditions.winddir);
    const forecast = document.querySelector('.forecast');
    forecast.innerHTML = "";
    const todaysForecast = document.createElement('div');
    //todaysForecast.innerHTML = '';
    todaysForecast.classList.add('todays-forecast');
    todaysForecast.innerHTML = 
        `<h1>${data.resolvedAddress}</h1>
        <p><span class="temp">${data.currentConditions.temp}</span><span class="temp-unit">°F</span></p>
        <figure class="icon-todays-forecast"><img src="${icon}" alt="${data.currentConditions.icon}"></figure> 
        <p>${data.currentConditions.conditions}</p>
        <p>H:<span class="temp">${data.days[0].tempmax}</span><span class="temp-unit">°F</span> L:<span class="temp">${data.days[0].tempmin}</span><span class="temp-unit">°F</span></p>
        <p>Feels Like: <span class="temp">${data.currentConditions.feelslike}</span><span class="temp-unit">°F</span></p>
        <p>Humidity: currently ${data.currentConditions.humidity}%</p>
        <p>Wind: currently ${data.currentConditions.windspeed} mph out of the ${direction} with gusts up to ${data.days[0].windgust} mph</p>
        <p>Forecast: ${data.description}</p>`;
    forecast.append(todaysForecast);
};



export function display7DayForecast(data) {
    const forecast = document.querySelector('.forecast');
    const weekForecast = document.createElement('div');
    //weekForecast.innerHTML = '';
    weekForecast.classList.add('week-forecast');
    weekForecast.innerHTML = '<h2>7 Day Forecast</h2>';
    const ul = document.createElement('ul');
    ul.classList.add('week');
    for (let i = 0; i <= 6; i++) {
        const li = document.createElement('li');
        li.classList.add('day');
        const icon = getWeatherIcon(data.days[i].icon);
        li.innerHTML = `${format(data.days[i].datetime.replace(/-/g, '/'), 'ccc')}  <figure class="icon-week-forecast"><img src="${icon}" alt="${data.days[i].icon}"></figure> <span class="temp">${data.days[i].tempmin}</span><span class="temp-unit">°F</span> - <span class="temp">${data.days[i].tempmax}</span><span class="temp-unit">°F</span>`;
        ul.append(li);
        console.log(data.days[i].datetime);
    }
    weekForecast.append(ul);
    forecast.append(weekForecast);
};
