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
        `<div class="today-top">
        <h2>${data.resolvedAddress}</h2>
        <h3><span class="temp">${data.currentConditions.temp}</span><span class="temp-unit">°F</span></h3>
        <h3>${data.currentConditions.conditions}</h3>
        <figure class="icon-todays-forecast"><img src="${icon}" alt="${data.currentConditions.icon}"></figure> 
        </div>
        <div class="today-mid">
        <p><span class="bold">H:</span><span class="temp">${data.days[0].tempmax}</span><span class="temp-unit">°F</span> - <span class="bold">L:</span><span class="temp">${data.days[0].tempmin}</span><span class="temp-unit">°F</span></p>
        <p><span class="bold">Feels Like:</span> <span class="temp">${data.currentConditions.feelslike}</span><span class="temp-unit">°F</span></p>
        <p><span class="bold">Humidity:</span> ${data.currentConditions.humidity}%</p>
        <p><span class="bold">Precip:</span> ${data.days[0].precipprob}%</p>
        </div>
        <div class="today-end">
        <p><span class="bold">Wind:</span> ${data.currentConditions.windspeed} mph out of the ${direction} with gusts up to ${data.days[0].windgust} mph</p>
        <p><span class="bold">Forecast:</span> ${data.description}</p>
        </div>`;
        
    forecast.append(todaysForecast);
};

// export function displayHourForecast(data) {

// }

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
        li.innerHTML = `${format(data.days[i].datetime.replace(/-/g, '/'), 'ccc')}  <figure class="icon-week-forecast"><img src="${icon}" alt="${data.days[i].icon}" class="icon-week"></figure> <div class="temp-range"><span class="temp">${data.days[i].tempmin}</span><span class="temp-unit">°F</span> - <span class="temp">${data.days[i].tempmax}</span><span class="temp-unit">°F</span></div>`;
        ul.append(li);
        console.log(data.days[i].datetime);
    }
    weekForecast.append(ul);
    forecast.append(weekForecast);
};
