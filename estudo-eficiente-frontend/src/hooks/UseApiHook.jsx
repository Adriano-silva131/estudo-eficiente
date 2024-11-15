import { useState } from "react";
import axios from "axios";

const useApi = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try { 

      const token = localStorage.getItem("token");

      const headers = token ? {Authorization: `Bearer ${token}`} : {};

        const response = await axios({
            url:`http://localhost:8000${url}`,
            method,
            data: body,
            headers,
        });

        setData(response.data);
    } catch (err) {
        setError(err);
    } finally {
        setLoading(false);
    }
  };
  return {data, error, loading, fetchData };
};

export default useApi;
