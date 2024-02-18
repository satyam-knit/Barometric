import React, { useEffect,useState } from "react";
import "./style.css";
import WeatherDetails from "./Weatherdetails";

function SearchMain() {
  const [searchTerm, seSearchTerm] = useState("delhi");
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder=" Search city.."
            id="search"
            value={searchTerm}
            onChange={(e) => seSearchTerm(e.target.value)}
          />
        </div>
        <button className="searchButton" onClick={getWeatherInfo}>Search</button>
      </div>
      <WeatherDetails />
    </>
  );
}

export default SearchMain;
