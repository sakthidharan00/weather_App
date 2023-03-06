import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState("");
  const [weather, SetWeather] = useState("");
  const apiKey = "209a2a56da05a1082cb2755630e99540";
  const submit = async () => {
    try {
      const log = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      SetWeather(log.data);

    }
    catch (e) {
      console.log(e.message);
    }

  }
  return (

    <div className="container-fluid">
      <div className='container'>
        {
          !weather ? <div className='content initalPage'>
            <div className='content_Header '>
              <h3>Weather App</h3>
              <p>Powered By</p>
              <img src='https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/d3/a0/38/d3a038ed-941e-d2d4-e7ff-dc28df53ce41/source/200x200bb.jpg' alt='logo' />
            </div>
            <div className='input'>
              <input type="text" className='form-control' value={city} onChange={(e) => { setCity(e.target.value) }} placeholder='Enter City .....' required />
              <button className='btn btn-success' onClick={submit}>Search</button>
            </div>
          </div> :
            <div className='content_response'>

              <div className='info'>
                <h2>{weather.name}</h2>
                <h4>Temp:{weather.main.temp}°C</h4>
                <p>{weather.weather[0].description}</p>
                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
                <button className='btn btn-success' onClick={() => SetWeather("")}>Back</button>

              </div>
            </div>

        }








      </div>

    </div >

  );
}

export default App;
