import React, { Component } from "react";

class ClicksImpressionsRow extends Component {

  render() { 
  
    const { clicks, impressions } = this.props;

    return ( 
      <div className="clicksImpressions">
        <p>Clicks:</p>
        {clicks ? (
          <p className="clicks">{clicks}</p>
        ) : (
          <p className="clicks">0</p>
        )}
        <p>Impressions:</p>
        {impressions ? (
          <p className="impressions">{impressions}</p>
        ) : (
          <p className="impressions">0</p>
        )}
        

      </div>
     );
  }
}
 
export default ClicksImpressionsRow;