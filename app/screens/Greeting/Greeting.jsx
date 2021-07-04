import React from "react";
import styles from "./GreetingStyle.scss";
import { Input, useInput } from "../../components/Input";
import { BaseButton } from "../../components/BaseButton";
import { useCityContext } from "../../context/CityContext";
import { useWidgetContext } from "../../context/WidgetContext";
const Greeting = () => {
  const [city, setCity] = useInput("");
  const { addCity } = useCityContext();
  const { changeSection } = useWidgetContext();
  function displayWeather() {
    addCity(city);
    changeSection("weather");
  }
  return (
    <div className="greeting-container">
      <div className="greeting-title">Где вы сейчас находитесь?</div>
      <Input
        type="text"
        onChange={setCity}
        value={city}
        placeholder={"Укажите город"}
      />
      <BaseButton onClick={displayWeather}>Показать погоду</BaseButton>
    </div>
  );
};

export { Greeting };
