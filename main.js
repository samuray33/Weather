import {getWeatherDta} from "./app.js";
//windMeaning
const app = async () => {
    let city = document.getElementById('Search').value;
    let temp = document.getElementById('temp');
    let humidity = document.getElementById('waterMeaning');
    let windMeaning = document.getElementById('windMeaning');
    let sun = document.getElementById('sun');
    let minTemp = document.getElementById('minTemp');
    let maxnTemp = document.getElementById('maxnTemp');
    let BackImg = document.getElementById('BackImg');

    
    const weather = await getWeatherDta(city);
    humidity.innerHTML = weather.main.humidity + "%";
    windMeaning.innerHTML = weather.wind.speed + " м/с";
    sun.innerHTML = weather.weather[0].description;
    //temp.innerHTML =  Math.round(weather.main.temp) + "°";


    if(weather.main.temp >= 0){
        temp.innerHTML = "+" + Math.round(weather.main.temp) + "°";
    }else{
        temp.innerHTML = Math.round(weather.main.temp) + "°";
    }

    if(weather.main.temp_min >= 0){
        minTemp.innerHTML = "Min: " + "+" + weather.main.temp_min + "°";
    }else{
        minTemp.innerHTML = "Min: " + weather.main.temp_min + "°";
    }

    if(weather.main.temp_max >= 0){
        maxnTemp.innerHTML  = "Max: " + "+" + weather.main.temp_max + "°";
    }else{
        maxnTemp.innerHTML = "Max: " +  weather.main.temp_max + "°";
    }
    

    //Thunderstorm
    if(weather.weather[0].main == "Thunderstorm"){
        BackImg.querySelector('img').src = 'img/description/Thunderstorm.gif';
    }
    //Rain
    if(weather.weather[0].main == "Drizzle" || weather.weather[0].main == "Rain"){
        BackImg.querySelector('img').src = 'img/description/Rain.gif';
    }
    //Snow
    if(weather.weather[0].main == "Snow"){
        BackImg.querySelector('img').src = 'img/description/Snow.gif';
    }
    //Mist
    if(weather.weather[0].id > 700 && weather.weather[0].id < 782){
        BackImg.querySelector('img').src = 'img/description/Mist.gif';
    }
    //Clear
    if(weather.weather[0].main == "Clear"){
        BackImg.querySelector('img').src = 'img/description/Clear.gif';
    }
    //Clouds
    if(weather.weather[0].main == "Clouds"){
        BackImg.querySelector('img').src = 'img/description/clouds.gif';
    }
    

    console.log(weather);
    console.log(weather.name);
    console.log(weather.main.temp + "°");
    console.log(weather.main.humidity + "%");
    console.log(weather.wind.speed + " м/с");
};



const searchButton = document.querySelector('.searchButt');
searchButton.addEventListener('click', find);
const buttFind = document.querySelector('.buttFind');
buttFind.addEventListener('click', find);
function find() {
    app();
}
app();