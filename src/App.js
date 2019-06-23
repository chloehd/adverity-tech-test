import React, { useState } from 'react';
import './App.css'
import Papa from 'papaparse';
import Search from './Components/Search';



const App = () => {
  const [dataList, setData] = useState([]);

  // transform the csv doc into a json one
  Papa.parse('https://www.mocky.io/v2/5cd93aeb300000b721c014b0', {
      download: true,
      header: true,
      delimiter: ",",
      complete: function(results, file) {
        setData(results.data);
      },
    },)
   

  return (
    <div className="App">
      <header className="App-header">
        <h1>Adverity</h1>
      </header>
      <Search dataList={dataList} />
    </div>
  );
}

export default App;
