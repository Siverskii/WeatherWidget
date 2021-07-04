import React, { useState, useCallback } from "react";
import styles from "./SettingStyle.scss";
import { Input, useInput } from "../../components/Input";
import { useCityContext } from "../../context/CityContext";
import { BaseButton } from "../../components/BaseButton";
import { useWidgetContext } from "../../context/WidgetContext";
import { CityItem } from "./CityItem";

let itemsOffset = {};
const Setting = () => {
  const [city, setCity, resetValue] = useInput("");
  const { addCity, getCities, deleteCity, reorderCities } = useCityContext();
  const { changeSection } = useWidgetContext();
  const [cities, setCities] = useState(getCities());

  const setItemsOffset = useCallback((offset, city) => {
    itemsOffset[city] = offset;
  }, []);

  const reorderList = useCallback((offset, city) => {
    let currentItemOffset = itemsOffset[city] + offset;
    for (let key in itemsOffset) {
      if (itemsOffset.hasOwnProperty(key)) {
        if (
          (offset > 0 &&
            currentItemOffset > itemsOffset[key] &&
            currentItemOffset < itemsOffset[key] + 40) ||
          (offset < 0 &&
            currentItemOffset < itemsOffset[key] &&
            currentItemOffset > itemsOffset[key] - 40)
        ) {
          setCities([...reorderCities(city, key)]);
        }
      }
    }
  }, []);

  const deleteCityFromList = useCallback((city) => {
    setCities([...deleteCity(city)]);
  }, []);

  const addCityToList = useCallback((city) => {
    setCities([...addCity(city)]);
    resetValue();
  }, []);

  return (
    <div className={"setting-container"}>
      <div className="setting-title">
        <span>Настройки</span>
        <i
          onClick={() => changeSection("weather")}
          className={"icon-cancel-5"}
        ></i>
      </div>
      <div className={"citiesList-container"}>
        {cities.map((city, index) => {
          return (
            <CityItem
              key={city + index}
              reorderList={reorderList}
              giveItemOffset={setItemsOffset}
              deleteCity={deleteCityFromList}
              city={city}
            />
          );
        })}
      </div>
      <Input
        type="text"
        onChange={setCity}
        value={city}
        placeholder={"Добавить город"}
      />
      <BaseButton onClick={() => addCityToList(city)}>
        Добавить город
      </BaseButton>
    </div>
  );
};

export { Setting };
