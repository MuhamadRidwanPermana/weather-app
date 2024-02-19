import React, { useState } from "react";

export default function WeatherApp() {
  const API = {
    key: "b4f89c81b2139686440346fe387aa7bd",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const Search = (e) => {
    e.preventDefault();

    if (search === "") {
      alert("Please enter a location!");
    } else {
      try {
        fetch(`${API.base}weather?q=${search}&units=metric&APPID=${API.key}`)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setWeather(result);
          });
      } catch (error) {
        alert("Please enter a valid location!", error);
      }
    }
  };

  const IconWeather = (icon) => {
    switch (icon) {
      case "01d":
        return "src/assets/images/sun.png";
      case "01n":
        return "src/assets/images/moon.png";
      case "02d":
        return "src/assets/images/few-cloud.png";
      case "02n":
        return "src/assets/images/cloud-night.png";
      case "03d":
        return "src/assets/images/cloud.png";
      case "03n":
        return "src/assets/images/-night.png";
      case "04d":
        return "src/assets/images/broken-cloud.png";
      case "04n":
        return "src/assets/images/broken-cloud-night.png";
      case "09d":
        return "src/assets/images/drizzle.png";
      case "09n":
        return "src/assets/images/drizzle-night.png";
      case "10d":
        return "src/assets/images/rain.png";
      case "10n":
        return "src/assets/images/rain-night.png";
      case "11d":
        return "src/assets/images/thunderstorm.png";
      case "11n":
        return "src/assets/images/thunderstorm-night.png";
      case "13d":
        return "src/assets/images/snow.png";
      case "13n":
        return "src/assets/images/snow-night.png";
      case "50d":
        return "src/assets/images/mist.png";
      case "50n":
        return "src/assets/images/mist-night.png";
      default:
        return "src/assets/images/sun.png";
    }
  };

  if (Object.keys(weather).length === 0) {
    return (
      <div className="conatiner mx-auto max-w-4xl h-full py-5 text-center">
        <div className="flex justify-center mx-3">
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="text-base border-2 border-gray-400 rounded-full w-full h-12 p-5 mr-3"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="w-14 h-12 bg-gray-500 rounded-full" onClick={Search}>
            <img
              src="src/assets/images/search-icon.png"
              alt=""
              className="w-4 mx-auto"
            />
          </button>
        </div>

        <div>
          <div className="pb-1">
            <span id="city" className="text-2xl font-semibold text-gray-700">
              {weather.name ? weather.name : ""}
            </span>
            <span id="country" className="text-2xl text-gray-500">
              {weather.sys ? weather.sys.country : ""}
            </span>
          </div>

          <div className="border-2 rounded-3xl border-gray-400 m-5 h-full">
            <div className="flex justify-center my-5 py-5">
              <img
                src={IconWeather(
                  weather.weather ? weather.weather[0].icon : ""
                )}
                id="weather-icon"
                alt="weather icon"
                className="w-[150px]"
              />
            </div>

            <div className="text-center mb-5 pb-1">
              <h1
                id="temp"
                className="text-4xl my-3 font-semibold text-gray-700"
              >
                {weather.main ? Math.round(weather.main.temp) : ""} °C
              </h1>
              <h2
                id="weather-name"
                className="text-4xl my-3 font-semibold text-gray-700"
              >
                {weather.weather ? weather.weather[0].main : ""}
              </h2>
              <h3
                id="weather-description"
                className="text-xl my-3 font-medium text-gray-700 capitalize"
              >
                {weather.weather ? weather.weather[0].description : ""}
              </h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mx-5 my-5 py-1">
            <div className="flex justify-center border-2 border-gray-400 rounded-xl lg:p-5 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-wind w-8 h-auto text-gray-600"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
              </svg>
              <div className="lg:mx-3 mx-2 text-start">
                <h3 id="wind" className="text-sm font-medium text-gray-700">
                  {weather.wind ? weather.wind.speed : ""} m/s
                </h3>
                <h4 className="text-xs font-normal text-gray-800">
                  Wind Speed
                </h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl lg:p-5 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-thermometer-half w-8 h-auto text-gray-600"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
              </svg>
              <div className="lg:mx-3 mx-2 text-start">
                <h3 id="humadity" className="text-sm font-medium text-gray-700">
                  {weather.main ? weather.main.humidity : ""} %
                </h3>
                <h4 className="text-xs font-normal text-gray-800">Humadity</h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl lg:p-5 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[22px] h-auto text-gray-600"
                viewBox="0 0 24 35"
                fill="none"
              >
                <path
                  d="M10.7143 26.7858C10.714 27.375 10.5517 27.9528 10.2452 28.456C9.93875 28.9592 9.49985 29.3685 8.97648 29.6392C8.45311 29.9098 7.86541 30.0314 7.27762 29.9907C6.68982 29.9499 6.12453 29.7483 5.64354 29.408C5.16254 29.0677 4.78433 28.6018 4.55025 28.061C4.31617 27.5203 4.23522 26.9257 4.31624 26.3421C4.39727 25.7584 4.63715 25.2083 5.00968 24.7518C5.38221 24.2953 5.87305 23.95 6.42856 23.7536V5.35719C6.42856 5.07303 6.54145 4.80051 6.74238 4.59958C6.94331 4.39865 7.21583 4.28577 7.49999 4.28577C7.78415 4.28577 8.05667 4.39865 8.25761 4.59958C8.45854 4.80051 8.57142 5.07303 8.57142 5.35719V23.7536C9.19837 23.9753 9.74114 24.3859 10.1249 24.929C10.5087 25.4721 10.7146 26.1208 10.7143 26.7858Z"
                  fill="#4B5563"
                />
                <path
                  d="M2.14286 5.35714C2.14286 3.93634 2.70727 2.57373 3.71193 1.56907C4.71659 0.564411 6.0792 0 7.5 0C8.9208 0 10.2834 0.564411 11.2881 1.56907C12.2927 2.57373 12.8571 3.93634 12.8571 5.35714V21.5357C13.8907 22.5906 14.5898 23.9271 14.8669 25.3778C15.1439 26.8284 14.9865 28.3285 14.4144 29.6901C13.8422 31.0516 12.8809 32.2139 11.6509 33.0312C10.4208 33.8486 8.97684 34.2846 7.5 34.2846C6.02316 34.2846 4.57919 33.8486 3.34915 33.0312C2.11911 32.2139 1.15776 31.0516 0.585641 29.6901C0.0135242 28.3285 -0.143892 26.8284 0.133131 25.3778C0.410154 23.9271 1.10929 22.5906 2.14286 21.5357V5.35714ZM7.5 2.14286C6.64752 2.14286 5.82995 2.4815 5.22716 3.0843C4.62436 3.68709 4.28572 4.50466 4.28572 5.35714V22.4721L3.92786 22.7936C3.11909 23.5168 2.54899 24.4686 2.29301 25.523C2.03704 26.5773 2.10725 27.6846 2.49435 28.6982C2.88146 29.7118 3.56721 30.5839 4.46086 31.1992C5.35451 31.8145 6.41393 32.144 7.49893 32.144C8.58392 32.144 9.64335 31.8145 10.537 31.1992C11.4306 30.5839 12.1164 29.7118 12.5035 28.6982C12.8906 27.6846 12.9608 26.5773 12.7048 25.523C12.4489 24.4686 11.8788 23.5168 11.07 22.7936L10.7143 22.4721V5.35714C10.7143 4.50466 10.3756 3.68709 9.77284 3.0843C9.17005 2.4815 8.35248 2.14286 7.5 2.14286Z"
                  fill="#4B5563"
                />
                <path
                  d="M20.7071 0.707107L20 0L19.2929 0.707107L16.2929 3.70711C15.9024 4.09763 15.9024 4.7308 16.2929 5.12132C16.6834 5.51184 17.3166 5.51184 17.7071 5.12132L19 3.82843V20.4142C19 20.9665 19.4477 21.4142 20 21.4142C20.5523 21.4142 21 20.9665 21 20.4142V3.82843L22.2929 5.12132C22.6834 5.51184 23.3166 5.51184 23.7071 5.12132C24.0976 4.7308 24.0976 4.09763 23.7071 3.70711L20.7071 0.707107Z"
                  fill="#4B5563"
                />
              </svg>
              <div className="lg:mx-3 mx-2 text-start">
                <h3 id="temp-max" className="text-sm font-medium text-gray-700">
                  {weather.main ? weather.main.temp_max : ""} °
                </h3>
                <h4 className="text-xs font-normal text-gray-800">Max Temp</h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl lg:p-5 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[22px] h-auto text-gray-600"
                viewBox="0 0 25 35"
                fill="none"
              >
                <path
                  d="M10.7143 26.7858C10.714 27.375 10.5517 27.9528 10.2452 28.456C9.93875 28.9592 9.49985 29.3685 8.97648 29.6392C8.45311 29.9098 7.86541 30.0314 7.27762 29.9907C6.68982 29.9499 6.12453 29.7484 5.64354 29.408C5.16254 29.0677 4.78433 28.6018 4.55025 28.0611C4.31617 27.5203 4.23522 26.9257 4.31624 26.3421C4.39727 25.7585 4.63715 25.2083 5.00968 24.7518C5.38221 24.2953 5.87305 23.95 6.42856 23.7536V20.3572C6.42856 20.073 6.54145 19.8005 6.74238 19.5996C6.94331 19.3986 7.21583 19.2858 7.49999 19.2858C7.78415 19.2858 8.05667 19.3986 8.25761 19.5996C8.45854 19.8005 8.57142 20.073 8.57142 20.3572V23.7536C9.19837 23.9753 9.74114 24.3859 10.1249 24.929C10.5087 25.4721 10.7146 26.1208 10.7143 26.7858Z"
                  fill="#4B5563"
                />
                <path
                  d="M2.14286 5.35714C2.14286 3.93634 2.70727 2.57373 3.71193 1.56907C4.71659 0.564411 6.0792 0 7.5 0C8.9208 0 10.2834 0.564411 11.2881 1.56907C12.2927 2.57373 12.8571 3.93634 12.8571 5.35714V21.5357C13.8907 22.5906 14.5898 23.9271 14.8669 25.3778C15.1439 26.8284 14.9865 28.3285 14.4144 29.6901C13.8422 31.0516 12.8809 32.2139 11.6509 33.0312C10.4208 33.8486 8.97684 34.2846 7.5 34.2846C6.02316 34.2846 4.57919 33.8486 3.34915 33.0312C2.11911 32.2139 1.15776 31.0516 0.585641 29.6901C0.0135242 28.3285 -0.143892 26.8284 0.133131 25.3778C0.410154 23.9271 1.10929 22.5906 2.14286 21.5357V5.35714ZM7.5 2.14286C6.64752 2.14286 5.82995 2.4815 5.22716 3.0843C4.62436 3.68709 4.28572 4.50466 4.28572 5.35714V22.4721L3.92786 22.7936C3.11909 23.5168 2.54899 24.4686 2.29301 25.523C2.03704 26.5773 2.10725 27.6846 2.49435 28.6982C2.88146 29.7118 3.56721 30.5839 4.46086 31.1992C5.35451 31.8145 6.41393 32.144 7.49893 32.144C8.58392 32.144 9.64335 31.8145 10.537 31.1992C11.4306 30.5839 12.1164 29.7118 12.5035 28.6982C12.8906 27.6846 12.9608 26.5773 12.7048 25.523C12.4489 24.4686 11.8788 23.5168 11.07 22.7936L10.7143 22.4721V5.35714C10.7143 4.50466 10.3756 3.68709 9.77284 3.0843C9.17005 2.4815 8.35248 2.14286 7.5 2.14286Z"
                  fill="#4B5563"
                />
                <path
                  d="M20.2929 22.7071L21 23.4142L21.7071 22.7071L24.7071 19.7071C25.0976 19.3166 25.0976 18.6834 24.7071 18.2929C24.3166 17.9023 23.6834 17.9023 23.2929 18.2929L22 19.5858L22 2.99997C22 2.44769 21.5523 1.99997 21 1.99997C20.4477 1.99997 20 2.44769 20 2.99997L20 19.5858L18.7071 18.2929C18.3166 17.9023 17.6834 17.9023 17.2929 18.2929C16.9024 18.6834 16.9024 19.3166 17.2929 19.7071L20.2929 22.7071Z"
                  fill="#4B5563"
                />
              </svg>
              <div className="lg:mx-3 mx-2 text-start">
                <h3 id="temp-max" className="text-sm font-medium text-gray-700">
                  {weather.main ? weather.main.temp_min : ""} °
                </h3>
                <h4 className="text-xs font-normal text-gray-800">Min Temp</h4>
              </div>
            </div>
          </div>

          {weather.cod}
          {weather.message}
        </div>
      </div>
    )
  } else {
    console.log(weather)
  }

  return (
    <div className="conatiner mx-auto max-w-4xl h-full py-5 text-center">
      <div className="flex justify-center mx-3">
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="text-base border-2 border-gray-400 rounded-full w-full h-12 p-5 mr-3"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="w-14 h-12 bg-gray-500 rounded-full" onClick={Search}>
          <img
            src="src/assets/images/search-icon.png"
            alt=""
            className="w-4 mx-auto"
          />
        </button>
      </div>

      {typeof weather.main !== "undefined" ? (
        <div>
          <div className="my-5 py-2">
            <span id="city" className="text-2xl font-semibold text-gray-700">
              {weather.name ? weather.name : "Indonesia"}
            </span>
            <span id="country" className="text-2xl text-gray-500">
              , {weather.sys ? weather.sys.country : "ID"}
            </span>
          </div>

          <div className="border-2 rounded-3xl border-gray-400 m-5 h-full">
            <div className="flex justify-center my-5 py-5">
              <img
                src={IconWeather(
                  weather.weather ? weather.weather[0].icon : ""
                )}
                id="weather-icon"
                alt="weather icon"
                className="w-[150px]"
              />
            </div>

            <div className="text-center mb-5 pb-1">
              <h1
                id="temp"
                className="text-4xl my-3 font-semibold text-gray-700"
              >
                {weather.main ? Math.round(weather.main.temp) : ""} °C
              </h1>
              <h2
                id="weather-name"
                className="text-4xl my-3 font-semibold text-gray-700"
              >
                {weather.weather ? weather.weather[0].main : ""}
              </h2>
              <h3
                id="weather-description"
                className="text-xl my-3 font-medium text-gray-700 capitalize"
              >
                {weather.weather ? weather.weather[0].description : ""}
              </h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mx-5 my-5 py-1">
            <div className="flex justify-center border-2 border-gray-400 rounded-xl lg:p-5 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-wind w-8 h-auto text-gray-600"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
              </svg>
              <div className="lg:mx-3 mx-2 text-start">
                <h3 id="wind" className="text-sm font-medium text-gray-700">
                  {weather.wind ? weather.wind.speed : ""} m/s
                </h3>
                <h4 className="text-xs font-normal text-gray-800">
                  Wind Speed
                </h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl lg:p-5 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-thermometer-half w-8 h-auto text-gray-600"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
              </svg>
              <div className="lg:mx-3 mx-2 text-start">
                <h3 id="humadity" className="text-sm font-medium text-gray-700">
                  {weather.main ? weather.main.humidity : ""} %
                </h3>
                <h4 className="text-xs font-normal text-gray-800">Humadity</h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl lg:p-5 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[22px] h-auto text-gray-600"
                viewBox="0 0 24 35"
                fill="none"
              >
                <path
                  d="M10.7143 26.7858C10.714 27.375 10.5517 27.9528 10.2452 28.456C9.93875 28.9592 9.49985 29.3685 8.97648 29.6392C8.45311 29.9098 7.86541 30.0314 7.27762 29.9907C6.68982 29.9499 6.12453 29.7483 5.64354 29.408C5.16254 29.0677 4.78433 28.6018 4.55025 28.061C4.31617 27.5203 4.23522 26.9257 4.31624 26.3421C4.39727 25.7584 4.63715 25.2083 5.00968 24.7518C5.38221 24.2953 5.87305 23.95 6.42856 23.7536V5.35719C6.42856 5.07303 6.54145 4.80051 6.74238 4.59958C6.94331 4.39865 7.21583 4.28577 7.49999 4.28577C7.78415 4.28577 8.05667 4.39865 8.25761 4.59958C8.45854 4.80051 8.57142 5.07303 8.57142 5.35719V23.7536C9.19837 23.9753 9.74114 24.3859 10.1249 24.929C10.5087 25.4721 10.7146 26.1208 10.7143 26.7858Z"
                  fill="#4B5563"
                />
                <path
                  d="M2.14286 5.35714C2.14286 3.93634 2.70727 2.57373 3.71193 1.56907C4.71659 0.564411 6.0792 0 7.5 0C8.9208 0 10.2834 0.564411 11.2881 1.56907C12.2927 2.57373 12.8571 3.93634 12.8571 5.35714V21.5357C13.8907 22.5906 14.5898 23.9271 14.8669 25.3778C15.1439 26.8284 14.9865 28.3285 14.4144 29.6901C13.8422 31.0516 12.8809 32.2139 11.6509 33.0312C10.4208 33.8486 8.97684 34.2846 7.5 34.2846C6.02316 34.2846 4.57919 33.8486 3.34915 33.0312C2.11911 32.2139 1.15776 31.0516 0.585641 29.6901C0.0135242 28.3285 -0.143892 26.8284 0.133131 25.3778C0.410154 23.9271 1.10929 22.5906 2.14286 21.5357V5.35714ZM7.5 2.14286C6.64752 2.14286 5.82995 2.4815 5.22716 3.0843C4.62436 3.68709 4.28572 4.50466 4.28572 5.35714V22.4721L3.92786 22.7936C3.11909 23.5168 2.54899 24.4686 2.29301 25.523C2.03704 26.5773 2.10725 27.6846 2.49435 28.6982C2.88146 29.7118 3.56721 30.5839 4.46086 31.1992C5.35451 31.8145 6.41393 32.144 7.49893 32.144C8.58392 32.144 9.64335 31.8145 10.537 31.1992C11.4306 30.5839 12.1164 29.7118 12.5035 28.6982C12.8906 27.6846 12.9608 26.5773 12.7048 25.523C12.4489 24.4686 11.8788 23.5168 11.07 22.7936L10.7143 22.4721V5.35714C10.7143 4.50466 10.3756 3.68709 9.77284 3.0843C9.17005 2.4815 8.35248 2.14286 7.5 2.14286Z"
                  fill="#4B5563"
                />
                <path
                  d="M20.7071 0.707107L20 0L19.2929 0.707107L16.2929 3.70711C15.9024 4.09763 15.9024 4.7308 16.2929 5.12132C16.6834 5.51184 17.3166 5.51184 17.7071 5.12132L19 3.82843V20.4142C19 20.9665 19.4477 21.4142 20 21.4142C20.5523 21.4142 21 20.9665 21 20.4142V3.82843L22.2929 5.12132C22.6834 5.51184 23.3166 5.51184 23.7071 5.12132C24.0976 4.7308 24.0976 4.09763 23.7071 3.70711L20.7071 0.707107Z"
                  fill="#4B5563"
                />
              </svg>
              <div className="lg:mx-3 mx-2 text-start">
                <h3 id="temp-max" className="text-sm font-medium text-gray-700">
                  {weather.main ? weather.main.temp_max : ""} °
                </h3>
                <h4 className="text-xs font-normal text-gray-800">Max Temp</h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl lg:p-5 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[22px] h-auto text-gray-600"
                viewBox="0 0 25 35"
                fill="none"
              >
                <path
                  d="M10.7143 26.7858C10.714 27.375 10.5517 27.9528 10.2452 28.456C9.93875 28.9592 9.49985 29.3685 8.97648 29.6392C8.45311 29.9098 7.86541 30.0314 7.27762 29.9907C6.68982 29.9499 6.12453 29.7484 5.64354 29.408C5.16254 29.0677 4.78433 28.6018 4.55025 28.0611C4.31617 27.5203 4.23522 26.9257 4.31624 26.3421C4.39727 25.7585 4.63715 25.2083 5.00968 24.7518C5.38221 24.2953 5.87305 23.95 6.42856 23.7536V20.3572C6.42856 20.073 6.54145 19.8005 6.74238 19.5996C6.94331 19.3986 7.21583 19.2858 7.49999 19.2858C7.78415 19.2858 8.05667 19.3986 8.25761 19.5996C8.45854 19.8005 8.57142 20.073 8.57142 20.3572V23.7536C9.19837 23.9753 9.74114 24.3859 10.1249 24.929C10.5087 25.4721 10.7146 26.1208 10.7143 26.7858Z"
                  fill="#4B5563"
                />
                <path
                  d="M2.14286 5.35714C2.14286 3.93634 2.70727 2.57373 3.71193 1.56907C4.71659 0.564411 6.0792 0 7.5 0C8.9208 0 10.2834 0.564411 11.2881 1.56907C12.2927 2.57373 12.8571 3.93634 12.8571 5.35714V21.5357C13.8907 22.5906 14.5898 23.9271 14.8669 25.3778C15.1439 26.8284 14.9865 28.3285 14.4144 29.6901C13.8422 31.0516 12.8809 32.2139 11.6509 33.0312C10.4208 33.8486 8.97684 34.2846 7.5 34.2846C6.02316 34.2846 4.57919 33.8486 3.34915 33.0312C2.11911 32.2139 1.15776 31.0516 0.585641 29.6901C0.0135242 28.3285 -0.143892 26.8284 0.133131 25.3778C0.410154 23.9271 1.10929 22.5906 2.14286 21.5357V5.35714ZM7.5 2.14286C6.64752 2.14286 5.82995 2.4815 5.22716 3.0843C4.62436 3.68709 4.28572 4.50466 4.28572 5.35714V22.4721L3.92786 22.7936C3.11909 23.5168 2.54899 24.4686 2.29301 25.523C2.03704 26.5773 2.10725 27.6846 2.49435 28.6982C2.88146 29.7118 3.56721 30.5839 4.46086 31.1992C5.35451 31.8145 6.41393 32.144 7.49893 32.144C8.58392 32.144 9.64335 31.8145 10.537 31.1992C11.4306 30.5839 12.1164 29.7118 12.5035 28.6982C12.8906 27.6846 12.9608 26.5773 12.7048 25.523C12.4489 24.4686 11.8788 23.5168 11.07 22.7936L10.7143 22.4721V5.35714C10.7143 4.50466 10.3756 3.68709 9.77284 3.0843C9.17005 2.4815 8.35248 2.14286 7.5 2.14286Z"
                  fill="#4B5563"
                />
                <path
                  d="M20.2929 22.7071L21 23.4142L21.7071 22.7071L24.7071 19.7071C25.0976 19.3166 25.0976 18.6834 24.7071 18.2929C24.3166 17.9023 23.6834 17.9023 23.2929 18.2929L22 19.5858L22 2.99997C22 2.44769 21.5523 1.99997 21 1.99997C20.4477 1.99997 20 2.44769 20 2.99997L20 19.5858L18.7071 18.2929C18.3166 17.9023 17.6834 17.9023 17.2929 18.2929C16.9024 18.6834 16.9024 19.3166 17.2929 19.7071L20.2929 22.7071Z"
                  fill="#4B5563"
                />
              </svg>
              <div className="lg:mx-3 mx-2 text-start">
                <h3 id="temp-max" className="text-sm font-medium text-gray-700">
                  {weather.main ? weather.main.temp_min : ""} °
                </h3>
                <h4 className="text-xs font-normal text-gray-800">Min Temp</h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full min-h-[calc(100vh-100px)]">
          <div className="text-center m-auto">
            <h1 className="lg:text-7xl text-5xl font-semibold text-gray-700 capitalize pb-5">
              {weather.cod}
            </h1>
            <h1 className="lg:text-6xl text-2xl font-semibold text-gray-700 capitalize">
              {weather.message}
            </h1>
          </div>
        </div>
      )}
        </div>
      );
}