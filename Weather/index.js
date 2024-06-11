
const btn = document.querySelector('#search-btn')
const city_Name = document.querySelector('#search-city')
const temperature = document.querySelector('#temp')
const locations = document.querySelector('#location')
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#wind')
const pressure = document.querySelector('#pressure')


btn.addEventListener('click',()=>{
    getData(city_Name.value);

})


const getData = (cityName) => {
    console.log(cityName);
    const api_Key = "fa5f1f336e28b4116bc72e90a1d24bd6";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_Key}&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => displayWeather(data))
    .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
   temperature.textContent = `${data.main.temp}  °C` 
   locations.textContent = `${data.name}`
   humidity.textContent = `Humidity ${data.main.humidity} %`
   wind.textContent = `Wind ${data.wind.speed} m/s`
   pressure.textContent = `Pressure ${data.main.pressure} hPa`
    
}