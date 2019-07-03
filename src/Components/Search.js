import React, { useState } from "react";
import Select from "react-select";

export default function({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <Select
        className="searchBar"
        options={data}
        onChange={({ value }) => {
          setSelected(value);
        }}
      />
      {selected ? (
        <div className="clicksImpressions">
          <p>Clicks:</p>
          <p className="clicks">{selected.clicks}</p>
          <p>Impressions:</p>
          <p className="impressions">{selected.impressions}</p>
        </div>
      ) : (
        <div className="clicksImpressions">
          <p>Clicks:</p>
          <p className="clicks">0</p>
          <p>Impressions:</p>
          <p className="impressions">0</p>
        </div>
      )}
    </div>
  );
}
