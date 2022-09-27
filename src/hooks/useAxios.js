import axios from "axios";
import { useEffect, useState } from "react";

export function useAxios(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return { data };
}
