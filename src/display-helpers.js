import clearDay from "./assets/clear-day.png";
import clearNight from "./assets/clear-night.png";
import cloudy from "./assets/cloudy.png";
import fog from "./assets/fog.png";
import hail from "./assets/hail.png";
import partlyCloudyDay from "./assets/partly-cloudy-day.png";
import partlyCloudyNight from "./assets/partly-cloudy-night.png";
import rainSnowShowersDay from "./assets/rain-snow-showers-day.png";
import rainSnowShowersNight from "./assets/rain-snow-showers-night.png";
import rainSnow from "./assets/rain-snow.png";
import rain from "./assets/rain.png";
import showersDay from "./assets/showers-day.png";
import showersNight from "./assets/showers-night.png";
import sleet from "./assets/sleet.png";
import snowShowersDay from "./assets/snow-showers-day.png";
import snowShowersNight from "./assets/snow-showers-night.png";
import snow from "./assets/snow.png";
import thunderRain from "./assets/thunder-rain.png";
import thunderShowersDay from "./assets/thunder-showers-day.png";
import thunderShowersNight from "./assets/thunder-showers-night.png";
import thunder from "./assets/thunder.png";
import wind from "./assets/wind.png";

export function getWeatherIcon(iconData) {
    switch (iconData) {
        case "clear-day":
            return clearDay;
            break;
        case "clear-night":
            return clearNight;
            break;
        case "cloudy":
            return cloudy;
            break; 
        case "fog":
            return fog;
            break;
        case "hail":
            return hail;
            break; 
        case "partly-cloudy-day":
            return partlyCloudyDay;
            break;
        case "partly-cloudy-night":
            return partlyCloudyNight;
            break;
        case "rain-snow-showers-day":
            return rainSnowShowersDay;
            break;
        case "rain-snow-showers-night":
            return rainSnowShowersNight;
            break;
        case "rain-snow":
            return rainSnow;
            break;
        case "rain":
            return rain;
            break; 
        case "showers-day":
            return showersDay;
            break;
        case "showers-night":
            return showersNight;
            break;
        case "sleet":
            return sleet;
            break;
        case "snow-showers-day":
            return snowShowersDay;
            break;
        case "snow-showers-night":
            return snowShowersNight;
            break;
        case "snow":
            return snow;
            break;
        case "thunder-rain":
            return thunderRain;
            break;
        case "thunder-showers-day":
            return thunderShowersDay;
            break;
        case "thunder-showers-night":
            return thunderShowersNight;
            break;
        case "thunder":
            return thunder;
            break;
        case "wind":
            return wind;
            break;     
    }    
};

export function getWindDirection(directionData) {
    if (directionData >= 348.75 || directionData < 11.25) return "North";
    else if (directionData >= 11.25 && directionData < 33.75) return "North Northeast";
    else if (directionData >= 33.75 && directionData < 56.25) return "Northeast";
    else if (directionData >= 56.25 && directionData < 78.75) return "East Northeast";
    else if (directionData >= 78.75 && directionData < 101.25) return "East";
    else if (directionData >= 101.25 && directionData < 123.75) return "East Southeast";
    else if (directionData >= 123.75 && directionData < 146.25) return "Southeast";
    else if (directionData >= 146.25 && directionData < 168.75) return "South Southeast";
    else if (directionData >= 168.75 && directionData < 191.25) return "South";
    else if (directionData >= 191.25 && directionData < 213.75) return "South Southwest";
    else if (directionData >= 213.75 && directionData < 236.25) return "Southwest";
    else if (directionData >= 236.25 && directionData < 258.75) return "West Southwest";
    else if (directionData >= 258.75 && directionData < 281.25) return "West";
    else if (directionData >= 281.25 && directionData < 303.75) return "West Northwest";
    else if (directionData >= 303.75 && directionData < 326.25) return "Northwest";
    else if (directionData >= 326.25 && directionData < 348.75) return "North Northwest";
    else return "Unknown Wind Direction";
};
