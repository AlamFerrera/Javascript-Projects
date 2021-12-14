const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city){
    const resp = await fetch(url(city));
    const data = await resp.json();
    addWeatherToPage(data);
}

function addWeatherToPage(data){
    main.innerHTML = "";
    const temp = KtoC(data.main.temp);
    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
    <h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    ${temp}°C 
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    </h2>
    <small>${data.weather[0].main}</small>
    `;

    main.appendChild(weather);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = search.value;

    if(location){
        getWeatherByLocation(location);
    }
});

//Kelvin to Celsius
function KtoC(K){
    return Math.floor(K - 273.15);
}