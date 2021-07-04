import React from "react";
import styles from "./WeatherStyle.scss";
import useFetch from "../../utils/useFetch";
import { degConverter } from "../../utils/degConverter";
const WeatherWidget = (props) => {
  const [isLoading, data] = useFetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=21c2bbd13b0b3d05460e096f9af5ccfd&units=metric`
  );
  if (isLoading)
    return (
      <div className={"ww-loading-container"}>
        <i className={"icon-spin5"}></i>
      </div>
    );
  const windDirection = degConverter(data.wind.deg);
  return (
    <div className={"ww-container"}>
      <div className={"ww-title"}>
        {data.name}, {data.sys.country}
      </div>
      <div className={"ww-temperature"}>
        <div className={"ww-temperature-img"}>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
        </div>
        <div className={"ww-temperature-deg"}>
          {Math.round(data.main.temp)}&deg;C
        </div>
      </div>
      <div className={"ww-descr"}>
        <div className={"ww-wind-press-container"}>
          <div className={"ww-wind-direction"}>
            <i
              style={{
                position: "absolute",
                transform: `rotateZ(${data.wind.deg}deg)`,
              }}
              className={"icon-direction"}
            ></i>
          </div>
          <div className={"ww-wind-speed"}>
            {data.wind.speed} m/sec {windDirection}
          </div>
        </div>
        <div className={"ww-wind-press-container"}>
          <i className={"icon-gauge"}></i>
          {data.main.pressure} hPa
        </div>
      </div>
    </div>
  );
};

export { WeatherWidget };
