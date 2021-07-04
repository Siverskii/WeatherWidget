import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(false);
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const response = await window.fetch(url);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
      setIsLoading(false);
    })();
  }, [url]);
  return [isLoading, data];
}
export default useFetch;
