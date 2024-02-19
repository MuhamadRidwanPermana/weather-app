import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTemperatureFull } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureFull } from "@fortawesome/free-solid-svg-icons";

export default function WeatherApp() {

  let API_Key = "b4f89c81b2139686440346fe387aa7bd";

  function search() {

    if (document.getElementById('search').value == '') {
      alert('Please enter a location!')
    } else {
      
      let location = document.getElementById('search').value;
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_Key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
  
        document.getElementById('city').innerHTML = data.name + ', ';
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) - 273 + ' °C';
        document.getElementById('country').innerHTML = data.sys.country;
        document.getElementById('wind').innerHTML = data.wind.speed + ' m/s';
        document.getElementById('humadity').innerHTML = data.main.humidity + ' %';
        document.getElementById('weather-name').innerHTML = data.weather[0].main;
        document.getElementById('weather-description').innerHTML = (data.weather[0].description)[0].toUpperCase() + (data.weather[0].description).substring(1);

        if (data.weather[0].icon == '01d' || data.weather[0].icon == '01n') {
          document.getElementById('weather-icon').src = 'src/assets/images/sun.png';
        } else if (data.weather[0].icon == '02d' || data.weather[0].icon == '02n') {
          document.getElementById('weather-icon').src = 'src/assets/images/few-cloud.png';
        } else if (data.weather[0].icon == '03d' || data.weather[0].icon == '03n') {
          document.getElementById('weather-icon').src = 'src/assets/images/cloud.png';
        } else if (data.weather[0].icon == '04d' || data.weather[0].icon == '04n') {
          document.getElementById('weather-icon').src = 'src/assets/images/broken-cloud.png';
        } else if (data.weather[0].icon == '09d' || data.weather[0].icon == '09n') {
          document.getElementById('weather-icon').src = 'src/assets/images/rain.png';
        } else if (data.weather[0].icon == '10d' || data.weather[0].icon == '10n') {
          document.getElementById('weather-icon').src = 'src/assets/images/drizzle.png';
        } else if (data.weather[0].icon == '11d' || data.weather[0].icon == '11n') {
          document.getElementById('weather-icon').src = 'src/assets/images/thunderstorm.png';
        } else if (data.weather[0].icon == '13d' || data.weather[0].icon == '13n') {
          document.getElementById('weather-icon').src = 'src/assets/images/snow.png';
        } else if (data.weather[0].icon == '50d' || data.weather[0].icon == '50n') {
          document.getElementById('weather-icon').src = 'src/assets/images/mist.png';
        } else {
          document.getElementById('weather-icon').src = 'src/assets/images/sun.png';
        }

      })
    
    }

  }

  Date.prototype.addHours = function(x) {
    this.setTime(this.getTime() + (x * 60 * 60 * 1000));
    return this;
  }

  // Date.prototype.addHours = function(h) {
  //   // this.setTime(this.getTime() + (h * 60 * 60 * 1000));
  //   // return this;

  //   // return new Date(this.getTime() + (h * 60 * 60 * 1000));

  //   // return new Date(this.getTime() + (h * 60 * 60 * 1000)).toLocaleString();


  //   return new Date(this.getTime() + (h * 60 * 60 * 1000)).toLocaleString('id-ID', { hour: 'numeric', minute: 'numeric', hour24: true });
  // }

  return (
    <div className='conatiner mx-auto max-w-4xl h-full py-5 text-center'>
      <div className='flex justify-center mx-3'>
        <input type='text' placeholder='Search' id='search' className="text-base border-2 border-gray-400 rounded-full w-full h-12 p-5 mr-3"/>
        <button className='w-14 h-12 bg-gray-500 rounded-full' onClick={search}>
          <img src="src/assets/images/search-icon.png" alt="" className='w-4 mx-auto'/>
        </button>
      </div>

      <div className='my-5 py-2'>
        <span id='city' className='text-2xl font-semibold text-gray-700'></span>
        <span id='country' className='text-2xl text-gray-500'>Indonesia</span>
        <h5 id='date' className='text-sm text-gray-500 my-3'>{ new Date().addHours(0).toLocaleString() }</h5>
      </div>

      <div className='border-2 rounded-3xl border-gray-400 m-5 h-full'>
        <div className='flex justify-center my-5 py-5'>
          <img src="src/assets/images/sun.png" id='weather-icon' alt="weather icon" className='w-[150px]'/>
        </div>

        <h1 id='temp' className='text-4xl my-3 font-semibold text-gray-700'>23° C</h1>
        <h2 id='weather-name' className='text-4xl my-3 font-semibold text-gray-700'>Clear</h2>
        <h3 id='weather-description' className='text-xl my-3 font-medium text-gray-700'>Clear</h3>

        <div className='flex justify-around my-5 py-5'>
          <div className='flex justify-center'>
            <img src="src/assets/images/wind.png" alt="weather icon" className='w-auto h-8'/>
            <div className='mx-5 text-start'>
              <h3 id='wind' className='text-sm font-medium'>20 m/s</h3>
              <h4 className='text-xs'>Wind Speed</h4>
            </div>
          </div>
          <div className='flex justify-center'>
            {/* <img src="src/assets/images/humadity.png" alt="weather icon" className='w-auto h-8'/> */}
            <FontAwesomeIcon icon={faTemperatureFull} className='w-auto h-8 text-gray-700'/>
            <div className='mx-5 text-start'>
              <h3 id='humadity' className='text-sm font-medium'>23 %</h3>
              <h4 className='text-xs'>Humadity</h4>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='my-5 pt-5 m-5 flex justify-between'>
        <div className='border-2 border-gray-400 rounded-3xl w-28 pb-2 pt-1'>
          <div className='flex justify-center my-5'>
            <img src="src/assets/images/sun.png" alt="weather icon" className='w-[50px]'/>
          </div>
          <h1 className='text-sm my-2 font-normal text-gray-700'>23° C</h1>
          <h2 className='text-base my-2 font-semibold text-gray-700'>Tue</h2>
        </div>
        <div className='border-2 border-gray-400 rounded-3xl w-28 pb-2 pt-1'>
          <div className='flex justify-center my-5'>
            <img src="src/assets/images/sun.png" alt="weather icon" className='w-[50px]'/>
          </div>
          <h1 className='text-sm my-2 font-normal text-gray-700'>23° C</h1>
          <h2 className='text-base my-2 font-semibold text-gray-700'>Tue</h2>
        </div>
        <div className='border-2 border-gray-400 rounded-3xl w-28 pb-2 pt-1'>
          <div className='flex justify-center my-5'>
            <img src="src/assets/images/sun.png" alt="weather icon" className='w-[50px]'/>
          </div>
          <h1 className='text-sm my-2 font-normal text-gray-700'>23° C</h1>
          <h2 className='text-base my-2 font-semibold text-gray-700'>Tue</h2>
        </div>
      </div> */}
    </div>
  )
}
