import React, { useEffect, useState } from "react";
import { Greeting } from "./screens/Greeting/Greeting";
import { Setting } from "./screens/Setting/Setting";
import { Weather } from "./screens/Weather/Weather";
import styles from "./globalStyle.scss";
import { useWidgetContext } from "./context/WidgetContext";

const displaySections = {
  greeting: <Greeting />,
  weather: <Weather />,
  setting: <Setting />,
};

const App = () => {
  const { displaySection } = useWidgetContext();
  return <div className="appContainer">{displaySections[displaySection]}</div>;
};

export { App };
