
import React from 'react'
import Card from './components/Card'

const script = () => {
  return (
    (weather)= {
   apiKey: "bd61f529c8322563f96637e9c1dfdb69",
   fetchWeather: function (city) {
      fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city 
      + "&units=standard&appid=" 
      + this.apiKey
      )
      .then((response) => response.json())
      .then((data) => console.log(data));
   },

   displayWeather: function(data) {
      const{name} = data;
      const{icon, description} = data.weather[0];
      const{temp, humidity} = data.main;
      const{speed} = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
   },
}
  )
}
<Card/>

export default script