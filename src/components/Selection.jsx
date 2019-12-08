import React, { Component } from "react";
import { chartDataSet1} from "../data-source/data";

function process() {
    
  var filterData = {};

  Object.keys(chartDataSet1).forEach(function(key, valueIndex) {
    for(let collectionIndex = 0; collectionIndex < chartDataSet1[key][valueIndex]['chartDataArray'].length; collectionIndex++){

      const keys = Object.keys(chartDataSet1[key][valueIndex]['chartDataArray'][collectionIndex].data);
      filterData = keys;
      return;
    }
  });

  return filterData;
}

const filterData = process();

class Selection extends Component {

  render() {
    
    return (
      <>
        <div className="container text-center">
          <div>
            <label className="m-1">From</label>
            <select
              className=" m-1 "
              name="filterValue1"
              value={this.props.filterValue1}
              onChange={this.props.onChangeYear}
            >
              {filterData.map(y => {
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                );
              })}
            </select>
            <label className="m-1">to</label>
            <select
              className="listbox-area m-1 "
              name="filterValue2"
              value={this.props.filterValue2}
              onChange={this.props.onChangeYear}
            >
              {filterData.map(y => {
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </>
    );
  }
}

export default Selection;
