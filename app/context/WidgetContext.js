import React, { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
const WidgetContext = React.createContext();

function WidgetProvider(props) {
  const [FirstVisit, setFirstVisit] = useLocalStorage("weatherAppFirstVisit");
  const [displaySection, setDisplaySection] = useState("weather");

  if (FirstVisit == undefined) {
    setDisplaySection("greeting");
    setFirstVisit(true);
  }

  const changeSection = (section) => {
    setDisplaySection(section);
  };

  const value = React.useMemo(
    () => ({ changeSection, displaySection }),
    [changeSection, displaySection]
  );

  return <WidgetContext.Provider value={value} {...props} />;
}

function useWidgetContext() {
  const context = React.useContext(WidgetContext);
  if (context === undefined) {
    throw new Error(`useWidgetContext must be used within a WidgetProvider`);
  }
  return context;
}

export { WidgetProvider, useWidgetContext };
