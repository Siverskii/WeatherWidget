import * as React from "react";
import { WidgetProvider } from "./WidgetContext";
import { CityProvider } from "./CityContext";
function AppProviders({ children }) {
  return (
    <WidgetProvider>
      <CityProvider>{children}</CityProvider>
    </WidgetProvider>
  );
}
export { AppProviders };
