import React, { useState } from "react";

import {
  BrokenCloud,
  CloudNight,
  Cloud,
  DrizzleNight,
  Drizzle,
  FewCloud,
  Mist,
  Moon,
  Sun,
  Rain,
  Snow,
  Snowfall,
  Thunderstrom,
} from "./utils/icons";

export default function WeatherApp() {
  const API = {
    key: "3f65a8c441e441298d3103853241602",
    base: "https://api.weatherapi.com/v1",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const Search = (e) => {
    e.preventDefault();

    if (search === "") {
      alert("Please enter a location!");
    } else {
      try {
        // Example API URL
        // http://api.weatherapi.com/v1/current.json?key=3f65a8c441e441298d3103853241602&q=Dubai&aqi=no

        fetch(`${API.base}/current.json?key=${API.key}&q=${search}&aqi=no`)
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

  const getIconWeather = (icon) => {
    switch (icon) {
      // Cerah
      case "//cdn.weatherapi.com/weather/64x64/day/113.png":
        return Sun;
      case "//cdn.weatherapi.com/weather/64x64/night/113.png":
        return Moon;
      // Teduh
      case "//cdn.weatherapi.com/weather/64x64/day/116.png":
        return FewCloud;
      case "//cdn.weatherapi.com/weather/64x64/night/116.png":
        return CloudNight;
      // Awan
      case "//cdn.weatherapi.com/weather/64x64/day/119.png":
        return Cloud;
      case "//cdn.weatherapi.com/weather/64x64/night/119.png":
        return CloudNight;
      case "//cdn.weatherapi.com/weather/64x64/day/122.png":
        return Cloud;
      case "//cdn.weatherapi.com/weather/64x64/night/122.png":
        return CloudNight;
      // Kabut
      case "//cdn.weatherapi.com/weather/64x64/day/143.png":
        return BrokenCloud;
      case "//cdn.weatherapi.com/weather/64x64/night/143.png":
        return BrokenCloud;
      case "//cdn.weatherapi.com/weather/64x64/day/248.png":
        return Mist;
      case "//cdn.weatherapi.com/weather/64x64/night/248.png":
        return Mist;
      case "//cdn.weatherapi.com/weather/64x64/day/260.png":
        return Mist;
      case "//cdn.weatherapi.com/weather/64x64/night/260.png":
        return Mist;
      // Hujan Cerah
      case "//cdn.weatherapi.com/weather/64x64/day/176.png":
        return Drizzle;
      case "//cdn.weatherapi.com/weather/64x64/day/293.png":
        return Drizzle;
      case "//cdn.weatherapi.com/weather/64x64/day/305.png":
        return Drizzle;
      case "//cdn.weatherapi.com/weather/64x64/day/353.png":
        return Drizzle;
      case "//cdn.weatherapi.com/weather/64x64/day/356.png":
        return Drizzle;
      case "//cdn.weatherapi.com/weather/64x64/night/176.png":
        return DrizzleNight;
      case "//cdn.weatherapi.com/weather/64x64/night/293.png":
        return DrizzleNight;
      case "//cdn.weatherapi.com/weather/64x64/night/305.png":
        return DrizzleNight;
      case "//cdn.weatherapi.com/weather/64x64/night/353.png":
        return DrizzleNight;
      case "//cdn.weatherapi.com/weather/64x64/night/356.png":
        return DrizzleNight;
      // Hujan Kecil
      case "//cdn.weatherapi.com/weather/64x64/day/263.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/day/266.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/day/296.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/day/302.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/day/308.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/night/263.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/night/266.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/night/296.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/night/302.png":
        return Rain;
      case "//cdn.weatherapi.com/weather/64x64/night/308.png":
        return Rain;
      // Hujan Besar
      case "//cdn.weatherapi.com/weather/64x64/day/200.png":
        return Thunderstrom;
      case "//cdn.weatherapi.com/weather/64x64/day/389.png":
        return Thunderstrom;
      case "//cdn.weatherapi.com/weather/64x64/night/200.png":
        return Thunderstrom;
      case "//cdn.weatherapi.com/weather/64x64/night/389.png":
        return Thunderstrom;
      // Hujan Salju
      case "//cdn.weatherapi.com/weather/64x64/day/185.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/day/281.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/day/284.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/day/311.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/day/314.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/day/317.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/day/320.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/night/185.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/night/281.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/night/284.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/night/311.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/night/314.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/night/317.png":
        return Snowfall;
      case "//cdn.weatherapi.com/weather/64x64/night/320.png":
        return Snowfall;
      // Salju
      case "//cdn.weatherapi.com/weather/64x64/day/179.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/182.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/227.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/230.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/323.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/326.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/329.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/332.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/335.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/338.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/350.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/368.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/362.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/365.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/371.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/374.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/day/377.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/179.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/182.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/227.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/230.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/323.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/326.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/329.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/332.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/335.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/338.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/350.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/368.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/362.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/365.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/371.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/374.png":
        return Snow;
      case "//cdn.weatherapi.com/weather/64x64/night/377.png":
        return Snow;
      default:
        return Sun;
    }
  };

  // Default Weather
  if (Object.keys(weather).length === 0) {
    return (
      <div className="conatiner mx-auto max-w-4xl h-full py-5 text-center px-5">
        <div className="flex justify-center lg:mx-auto border-2 border-gray-400 rounded-full w-full h-fit">
          <input
            type="text"
            placeholder="Search your location . . . "
            id="search"
            className="text-base text-gray-700 rounded-full w-full h-12 pl-5 focus:outline-none focus:bg-white"
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && Search(e)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-search w-6 h-fit my-3 mr-5 text-gray-400"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <div>
          <div className="mt-5 pt-2 mb-2">
            <span id="city" className="text-2xl font-semibold text-gray-700">
              {weather?.location ? weather?.location?.name + ", " : ""}
            </span>
            <span id="country" className="text-2xl text-gray-500">
              {weather?.location ? weather?.location?.region + " - " : ""}
            </span>
            <span id="country" className="text-2xl text-gray-500">
              {weather?.location ? weather?.location?.country : ""}
            </span>
          </div>
          <span id="country" className="text-sm text-gray-500">
            {weather?.location ? weather?.location?.localtime : ""}
          </span>

          <div className="border-2 rounded-3xl border-gray-400 m-1 h-full">
            <div className="flex justify-center my-5 py-5">
              <img
                src={weather.current ? weather.current.condition.icon : Sun}
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
                {weather.current ? weather.current.temp_c : ""} °C
              </h1>
              <h2
                id="weather-name"
                className="text-3xl my-3 font-semibold text-gray-700 capitalize"
              >
                {weather.current ? weather.current.condition.text : ""}
              </h2>
              <h3
                id="weather-description"
                className="text-xl my-3 font-medium text-gray-700 capitalize"
              >
                {weather.weather ? weather.weather[0].description : ""}
              </h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mx-1 my-5 py-1">
            <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-brightness-high lg:w-8 w-9 h-auto text-gray-700"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
              <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                <h3 className="text-base lg:text-sm font-medium text-gray-600">
                  Day
                </h3>
                <h4 className="text-xs font-normal text-gray-700">Condition</h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-wind lg:w-8 w-9 h-auto text-gray-600"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
              </svg>
              <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                <h3
                  id="wind"
                  className="text-base lg:text-sm font-medium text-gray-700"
                >
                  {weather.current ? weather.current.wind_mph : ""} m/s
                </h3>
                <h4 className="lg:text-xs text-xs font-normal text-gray-800">
                  Wind Speed
                </h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-thermometer-half lg:w-8 w-9 h-auto text-gray-600"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
              </svg>
              <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                <h3
                  id="humadity"
                  className="text-base lg:text-sm font-medium text-gray-700"
                >
                  {weather.current ? weather.current.humidity : ""} %
                </h3>
                <h4 className="lg:text-xs text-xs font-normal text-gray-800">
                  Humadity
                </h4>
              </div>
            </div>
            <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-thermometer-sun lg:w-8 w-9 h-auto text-gray-600"
                viewBox="0 0 16 16"
              >
                <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5" />
                <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0M8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5M12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708M8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" />
              </svg>
              <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                <h3
                  id="temp-max"
                  className="text-base lg:text-sm font-medium text-gray-700"
                >
                  {weather.current ? weather.current.feelslike_c : ""} °
                </h3>
                <h4 className="lg:text-xs text-xs font-normal text-gray-800">
                  Feels Like
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(weather);
  }

  return (
    <>
      {typeof weather.current !== "undefined" ? (
        <>
          {/* Day === 1 */}
          {weather.current.is_day == 1 ? (
            <div
              id="container"
              className="conatiner mx-auto max-w-4xl h-full py-5 text-center px-5"
            >
              <div className="flex justify-center lg:mx-auto border-2 border-gray-400 rounded-full w-full h-fit">
                <input
                  type="text"
                  placeholder="Search your location . . . "
                  id="search"
                  className="text-base bg-white text-gray-700 rounded-full w-full h-12 pl-5 focus:outline-none focus:bg-white "
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyUp={(e) => e.key === "Enter" && Search(e)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-search w-6 h-fit my-3 mr-5 text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <div>
                <div className="mt-5 pt-2 mb-2">
                  <h1
                    id="city"
                    className="lg:text-3xl text-2xl font-semibold text-gray-700"
                  >
                    {weather?.location ? weather?.location?.name : ""}
                  </h1>
                </div>
                {/* <div className="mb-3 grid grid-cols-2 lg:flex lg:justify-center md:flex md:justify-center"> */}
                <div className="mb-3 flex justify-center">
                  <h2 id="country" className="lg:text-xl text-gray-500">
                    {weather?.location
                      ? weather?.location?.region + " - "
                      : " "}
                  </h2>
                  <h2 id="country" className="lg:text-xl text-gray-500 mx-1">
                    {weather?.location ? weather?.location?.country : ""}
                  </h2>
                </div>
                <h3 id="locale-time" className="text-sm text-gray-500">
                  {weather?.location ? weather?.location?.localtime : ""}
                </h3>

                <div className="border-2 rounded-3xl border-gray-400 m-1 mt-5 h-full">
                  <div className="flex justify-center my-5 py-5">
                    <img
                      src={getIconWeather(weather.current.condition.icon)}
                      id="weather-icon"
                      alt="weather icon"
                      className="w-[150px]"
                    />
                  </div>

                  <div className="text-center mb-5 pb-1">
                    <h1
                      id="temp"
                      className="lg:text-4xl text-3xl my-3 font-semibold text-gray-700"
                    >
                      {weather.current ? weather.current.temp_c : ""} °C
                    </h1>
                    <h2
                      id="weather-name"
                      className="lg:text-3xl text-2xl my-3 font-semibold text-gray-700 capitalize"
                    >
                      {weather.current ? weather.current.condition.text : ""}
                    </h2>
                    <h3
                      id="weather-description"
                      className="text-xl my-3 font-medium text-gray-700 capitalize"
                    >
                      {weather.weather ? weather.weather[0].description : ""}
                    </h3>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mx-1 my-5 py-1">
                  <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-brightness-high lg:w-8 w-9 h-auto text-gray-700"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                    </svg>
                    <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                      <h3 className="text-base lg:text-sm font-medium text-gray-600">
                        Day
                      </h3>
                      <h4 className="text-xs font-normal text-gray-700">
                        Condition
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-wind lg:w-8 w-9 h-auto text-gray-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                      <h3
                        id="wind"
                        className="text-base lg:text-sm font-medium text-gray-700"
                      >
                        {weather.current ? weather.current.wind_mph : ""} m/s
                      </h3>
                      <h4 className="text-xs font-normal text-gray-800">
                        Wind Speed
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-thermometer-half lg:w-8 w-9 h-auto text-gray-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                      <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
                    </svg>
                    <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                      <h3
                        id="humadity"
                        className="text-base lg:text-sm font-medium text-gray-700"
                      >
                        {weather.current ? weather.current.humidity : ""} %
                      </h3>
                      <h4 className="lg:text-xs text-xs font-normal text-gray-800">
                        Humadity
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-thermometer-sun lg:w-8 w-9 h-auto text-gray-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5" />
                      <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0M8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5M12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708M8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                      <h3
                        id="temp-max"
                        className="text-base lg:text-sm font-medium text-gray-700"
                      >
                        {weather.current ? weather.current.feelslike_c : ""} °
                      </h3>
                      <h4 className="lg:text-xs text-xs font-normal text-gray-800">
                        Feels Like
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : // Night === 0
          weather.current.is_day == 0 ? (
            <div
              id="container"
              className="conatiner mx-auto max-w-4xl h-full py-5 text-center px-5 bg-[#1e1e1e]"
            >
              <div className="flex justify-center lg:mx-auto border-2 bg-[#1e1e1e] border-gray-400 rounded-full w-full h-fit">
                <input
                  type="text"
                  placeholder="Search your location . . . "
                  id="search"
                  className="text-base bg-[#1e1e1e] text-gray-400 rounded-full w-full h-12 pl-5 focus:outline-none focus:bg-[#1e1e1e] "
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyUp={(e) => e.key === "Enter" && Search(e)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-search w-6 h-fit my-3 mr-5 text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <div>
                <div className="mt-5 pt-2 mb-2">
                  <h1
                    id="city"
                    className="lg:text-3xl text-2xl font-semibold text-gray-400"
                  >
                    {weather?.location ? weather?.location?.name : ""}
                  </h1>
                </div>
                <div className="mb-3 flex justify-center">
                  <h2 id="country" className="lg:text-xl text-gray-400">
                    {weather?.location
                      ? weather?.location?.region + " - "
                      : " "}
                  </h2>
                  <h2 id="country" className="lg:text-xl text-gray-400 mx-1">
                    {weather?.location ? weather?.location?.country : ""}
                  </h2>
                </div>
                <h3 id="locale-time" className="text-sm text-gray-400">
                  {weather?.location ? weather?.location?.localtime : ""}
                </h3>

                <div className="border-2 rounded-3xl border-gray-400 m-1 mt-5 h-full">
                  <div className="flex justify-center my-5 py-5">
                    <img
                      src={getIconWeather(weather.current.condition.icon)}
                      id="weather-icon"
                      alt="weather icon"
                      className="w-[150px]"
                    />
                  </div>

                  <div className="text-center mb-5 pb-1">
                    <h1
                      id="temp"
                      className="lg:text-4xl text-3xl my-3 font-semibold text-gray-400"
                    >
                      {weather.current ? weather.current.temp_c : ""} °C
                    </h1>
                    <h2
                      id="weather-name"
                      className="lg:text-3xl text-2xl my-3 font-semibold text-gray-400 capitalize"
                    >
                      {weather.current ? weather.current.condition.text : ""}
                    </h2>
                    <h3
                      id="weather-description"
                      className="text-xl my-3 font-medium text-gray-400 capitalize"
                    >
                      {weather.weather ? weather.weather[0].description : ""}
                    </h3>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mx-1 my-5 py-1">
                  <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-moon-fill lg:w-8 w-9 h-auto text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    </svg>
                    <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                      <h3 className="text-base lg:text-sm font-medium text-gray-400">
                        Night
                      </h3>
                      <h4 className="text-xs font-normal text-gray-400">
                        Condition
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-wind lg:w-8 w-9 h-auto text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                      <h3
                        id="wind"
                        className="text-base lg:text-sm font-medium text-gray-400"
                      >
                        {weather.current ? weather.current.wind_mph : ""} m/s
                      </h3>
                      <h4 className="text-xs font-normal text-gray-400">
                        Wind Speed
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-thermometer-half lg:w-8 w-9 h-auto text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                      <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
                    </svg>
                    <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                      <h3
                        id="humadity"
                        className="text-base lg:text-sm font-medium text-gray-400"
                      >
                        {weather.current ? weather.current.humidity : ""} %
                      </h3>
                      <h4 className="lg:text-xs text-xs font-normal text-gray-400">
                        Humadity
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-center border-2 border-gray-400 rounded-xl p-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-thermometer-sun lg:w-8 w-9 h-auto text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5" />
                      <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0M8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5M12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708M8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <div className="lg:mx-3 md:mx-1 mx-5 text-start">
                      <h3
                        id="temp-max"
                        className="text-base lg:text-sm font-medium text-gray-400"
                      >
                        {weather.current ? weather.current.feelslike_c : ""} °
                      </h3>
                      <h4 className="lg:text-xs text-xs font-normal text-gray-400">
                        Feels Like
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>Undefined</>
          )}
        </>
      ) : (
        <div className="flex w-full min-h-[calc(100vh-100px)]">
          <div className="text-center m-auto">
            <h1 className="lg:text-7xl text-5xl font-semibold text-gray-800 capitalize">
              404
            </h1>
            <h1 className="lg:text-5xl text-4xl font-semibold text-gray-800 mt-5 mb-2">
              {/* {weather?.error?.message} */}
              CITY NOT FOUND.
            </h1>
            <h2 className="lg:text-2xl text-base font-normal text-gray-800 mb-2">
              Please Input Valid Location!
            </h2>
            <h2 className="lg:text-base text-xs font-semibold text-gray-800">
              Input only City, District or Country!
            </h2>

            <div className="mt-10" onClick={() => window.location.reload()}>
              <button className="bg-gray-500 hover:bg-gray-700 text-sm text-white py-2 px-5 rounded-full">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
