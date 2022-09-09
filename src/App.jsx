import React,{useState} from 'react'
import axios from 'axios'


const App = () => {
  const [data,setData] = useState({})
  const [city,setCity] = useState('')

  const apiKey = "bd61f529c8322563f96637e9c1dfdb69"
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
  
  // This function searches data from city being input
  const searchCity = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setCity('')
    }
  }


  return (
    <>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:ital,wght@0,500;0,600;1,300&display=swap" rel="stylesheet"/>
        <script src="/script.js" defer></script>
        <div className='card'>
            <div className='search'>
                <input type={'text'} className='search-bar' placeholder='Enter Location' value = {city} onChange = {event => setCity(event.target.value)} onKeyPress = {searchCity}/>
            </div>
            <div className="weather">
              <h2 className='city'>
                <p>{data.name}</p>
              </h2>
              <h1 className="temp"> 
                {data.main ? <p>{data.main.temp}°F</p> : null}
              </h1>
              <img src="" alt="" class="icon"/>
              <div className='moreInfo'>
                <div className="description">
                  {data.weather ? <p>Description: {data.weather[0].description}</p> : null}
                </div>
                <div className="humidity">
                  {data.main ? <p>Humidity: {data.main.humidity}%</p> : null}
                </div>
                <div className="wind">
                {data.wind ? <p>Wind Speed: {data.wind.speed}MPH</p> : null}
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App