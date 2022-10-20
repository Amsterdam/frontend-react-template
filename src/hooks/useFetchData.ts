import { useState } from "react";
import axios from "axios";

function useFetchData(config = {}) {
  const [errorMessage, setErrorMessage] = useState<any>();
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchData(endpoint: string) {
    setLoading(true);
    try {
      const data = await axios.get(endpoint, config);
      console.log("data", data.data);

      setResults(data.data);
    } catch (e: any) {
      setErrorMessage(e.message);
    }

    setLoading(false);
    return results;
  }

  return {
    errorMessage,
    loading,
    results,
    fetchData,
  };
}

export default useFetchData;
