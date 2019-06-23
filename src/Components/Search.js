import React, { Component } from 'react';
import Select from 'react-select';
import ClicksImpressionsRow from './ClicksImpressionsRow';


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
      clicks: '',
      impressions: '',
      channel: '',
    }
  }

  handleChange = (selectedOption) => {
    
    // calculate the clicks and impressions for Search and Display labels
    if (selectedOption.campaign === "Search" || selectedOption.campaign === "Display") {
      var clicksAll = 0;
      var impressionsAll = 0;
        for (var i = 0; i < this.props.dataList.length; i++) {
          if (selectedOption.campaign === this.props.dataList[i].channel) {
            clicksAll += Number(this.props.dataList[i].clicks);
            impressionsAll += Number(this.props.dataList[i].impressions)
          }
        }
        this.setState({
          selectedOption,
          clicks: clicksAll,
          impressions: impressionsAll
        });
        console.log(clicksAll, impressionsAll);
      
    } else {
      this.setState({
        selectedOption,
        clicks: selectedOption.clicks,
        impressions: selectedOption.impressions
      });

      console.log(`Selected: ${selectedOption.campaign} && ${selectedOption.channel}`);
    }

  }


  render() {

    const { selectedOption, clicks, impressions } = this.state;

    // create two labels to search by channel
    const customOptions = [
      { campaign: 'Search', channel: 'searchAll', 
      clicks: this.state.clicks, impressions: this.state.impressions },
      { campaign: 'Display', channel: 'displayAll', 
      clicks: this.state.clicks, impressions: this.state.impressions },
      ...this.props.dataList,
    ];


    return (
      <div className="searchBar">

        <Select
          name="form-field-name"
          value={selectedOption}
          onChange={this.handleChange}
          options={customOptions}
          getOptionLabel={option => option.campaign}
          getOptionValue={option => option.campaign}

        />

        <ClicksImpressionsRow clicks={clicks} impressions={impressions} />

      </div>
    );
  }
}

export default Search;