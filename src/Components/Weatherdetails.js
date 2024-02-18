import React from "react";

function WeatherDetails() {
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">Delhi, IN</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
          <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info">
                <p className="extra-info-leftside">
                  6:30 PM <br />
                  Sunset
                </p>
              </p>
            </div>
           <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info">
                <p className="extra-info-leftside">
                  444 <br />
                  Humidity
                </p>
              </p>
            </div>
            </div>
            <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info">
                <p className="extra-info-leftside">
                  433 <br />
                  Pressure
                </p>
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info">
                <p className="extra-info-leftside">
                  433 <br />
                  Speed
                </p>
              </p>
            </div>


           

           </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetails;
