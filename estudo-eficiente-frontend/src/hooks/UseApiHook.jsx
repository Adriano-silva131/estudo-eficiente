import {useState} from "react";
import axiosInstance from "../Helpers/apiInstance.js";

const useApi = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        url,
        method,
        data: body,
      });
      setData(response.data);
      return response.data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { data, error, loading, fetchData };
};
export default useApi;
