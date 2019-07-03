import { useState, useEffect } from "react";
import Papa from "papaparse";

export const Data = () => {
  const [dataList, setData] = useState([]);

  useEffect(() => {
    Papa.parse("https://www.mocky.io/v2/5cd93aeb300000b721c014b0", {
      download: true,
      header: true,
      delimiter: ",",
      complete: function(results, file) {
        setData(results.data);
      }
    });
  }, []);
  return dataList;
};
