import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) {
        throw new Error(response.status);
      }
    } catch (err) {
      json = null;
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
      setData(json);
      return { response, json };
    }
  }, []);

  return {
     data,
     error, 
     loading, 
     request };
};

export default useFetch;