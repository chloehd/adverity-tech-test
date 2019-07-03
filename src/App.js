import React from "react";
import "./App.css";
import { Data } from "./Data";
import Search from "./Components/Search";
import modifyData from "./ModifyDataForSearch";

const App = () => {
  const data = Data();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Adverity</h1>
      </header>
      <p>Choose channel or campaign:</p>
      <Search data={modifyData(data)} />
    </div>
  );
};

export default App;
