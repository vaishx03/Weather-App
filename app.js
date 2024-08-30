const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city) {
 const api_key = "452a0aa641eb58bc0a9569b99ba1e101";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

 const weather_data = await fetch (`${url}`).then(response => response.json());
if (weather_data.cod === `404`) {
location_not_found.style.display = "flex";
weather_body.style.display = "none";
	return;
}
 temperature.innerHTML = `${Math.round (weather_data.main.temp - 273.15) }°C`;
 description.innerHTML = `${weather_data.weather[0].description}`;
 humidity.innerHTML = `${weather_data.main.humidity}%`;
 wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;
 console.log(weather_data);

 switch(weather_data.weather[0].main){
	case 'Clouds':
		weather_img.src = "/images/cloudy.png";
		break;
		case 'Clear':
		weather_img.src = "/images/clear.png";
		break;
		case 'Rain':
		weather_img.src = "/images/rain.png";
		break;
		case 'Haze':
		weather_img.src = "/images/haze.png";
		break
		case 'Mist':
		weather_img.src = "/images/mist.png";
		break

 }
}
searchBtn.addEventListener('click', ()=> {
	checkWeather (inputBox.value);
}
);