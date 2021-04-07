const api={
    key:"69813e3c1cbb2d448dbe18a8a9b51f53",
    base:"http://api.openweathermap.org/data/2.5/"
}

const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
function setQuery(evt)
{
    if(evt.keyCode == 13)
    {
        getResults(searchbox.value);
        // console.log(searchbox.value)
    }
}


function getResults (query) {
    // console.log( fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`));
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
function displayResults(weather)
{
    // console.log(weather);
    let city=document.querySelector('.location .city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;
    
    let now=new Date();
    let date=document.querySelector('.location .date');
    date.innerText=dateBuilder(now);

    let temp=document.querySelector('.current .temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el=document.querySelector('.current .weather');
    weather_el.innerText=weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder(d)
{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];
     let day=days[d.getDay()];
     let date=d.getDate();
     let month=months[d.getMonth()];
     let year=d.getFullYear();
     return `${day} ${date} ${month} ${year}`;
}
function display()
{
    // console.log(fetch(`${api.base}weather?q=$Ludhiana&units=metric&APPID=${api.key}`))
    var a=document.querySelector('.location .city');
    fetch(`${api.base}weather?q=London&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(display1);
}
function display1(weather)
{
    let city=document.querySelector('.location .city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;
    
    let now=new Date();
    let date=document.querySelector('.location .date');
    date.innerText=dateBuilder(now);

    let temp=document.querySelector('.current .temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el=document.querySelector('.current .weather');
    weather_el.innerText=weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

}
// window.onLoad(display());

window.onload = (event) => {
    // console.log('page is fully loaded');
    display();
  };