import React, { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
const CityContext = React.createContext();
function CityProvider(props) {
  const [Cities, setCities] = useLocalStorage("cities");

  const addCity = (city) => {
    if (city != "") {
      if (Cities != undefined) {
        Cities.push(city);
        setCities(Cities);
        return Cities;
      } else {
        setCities([city]);
      }
    }
  };
  const deleteCity = (city) => {
    const index = Cities.indexOf(city);
    if (index != -1) {
      Cities.splice(index, 1);
      setCities(Cities);
    }
    return Cities;
  };
  const reorderCities = (city1, city2) => {
    const ind1 = Cities.indexOf(city1);
    const ind2 = Cities.indexOf(city2);

    [Cities[ind1], Cities[ind2]] = [Cities[ind2], Cities[ind1]];
    setCities(Cities);
    return Cities;
  };
  const getCities = () => {
    return Cities;
  };

  const value = React.useMemo(
    () => ({ Cities, addCity, deleteCity, reorderCities, getCities }),
    [Cities, addCity, deleteCity]
  );

  return <CityContext.Provider value={value} {...props} />;
}

function useCityContext() {
  const context = React.useContext(CityContext);
  if (context === undefined) {
    throw new Error(`useWidgetContext must be used within a WidgetProvider`);
  }
  return context;
}

export { CityProvider, useCityContext };
