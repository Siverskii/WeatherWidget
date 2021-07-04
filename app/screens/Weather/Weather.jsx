import React from "react";
import styles from "./WeatherStyle.scss";
import { useCityContext } from "../../context/CityContext";
import { WeatherWidget } from "./WeatherWidget";
import { useWidgetContext } from "../../context/WidgetContext";

const Weather = () => {
  const { getCities } = useCityContext();
  const { changeSection } = useWidgetContext();
  const сities = getCities();
  return (
    <div className={"weather-container"}>
      <div className={"setting-control"}>
        <i onClick={() => changeSection("setting")} className={"icon-cog"}></i>
      </div>
      {сities.map((city) => {
        return <WeatherWidget city={city} />;
      })}
    </div>
  );
};

export { Weather };
