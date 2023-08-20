function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "607ddd01a4ae7f19ade317d3907c6d01";
    console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);