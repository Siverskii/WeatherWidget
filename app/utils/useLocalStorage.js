import React, { useState } from "react";

function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      return undefined;
    }
  });
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new Error(error);
    }
  };
  return [storedValue, setValue];
}
export default useLocalStorage;
