// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(url, { signal: controller.signal });
        
        if (isMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted && err.name !== 'CanceledError' && err.code !== 'ERR_CANCELED') {
          setError(err.message || 'Error al cargar datos');
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}