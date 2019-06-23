import React, { Component } from "react";

class ClicksImpressionsRow extends Component {

  render() { 
  
    const { clicks, impressions } = this.props;

    return ( 
      <div className="clicksImpressions">
        <p>Clicks: {clicks}</p>
        <p>Impressions: {impressions}</p>

      </div>
     );
  }
}
 
export default ClicksImpressionsRow;