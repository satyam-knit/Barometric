import React, { useEffect,useState } from "react";
import "./style.css";
import WeatherDetails from "./Weatherdetails";

function SearchMain() {
  const [searchTerm, seSearchTerm] = useState("delhi");
  const [tempInfo, setTempInfo] = useState({});//[tempInfo, setTempInfo
  
  const getWeatherInfo = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=d4a985ca51517b4919f0bba41c916c33`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country,sunset} = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);

    } 
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, );


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder=" Search city ..."
            id="search"
            value={searchTerm}
            onChange={(e) => seSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherInfo}>Search</button>
        </div>
        
      </div>
      {/* this is the weather details */}
      <WeatherDetails {...tempInfo} />
    </>
  );
}

export default SearchMain;
