import React from "react";
import { chartDataSet1, chartDataSet3, chartDataSet4, chartDataSet2 } from "./../examples/data";
let procesedDataSet1 = [],
procesedDataSet2 = [],
procesedDataSet3 = [],
procesedDataSet4 = [];

let dataProcessing = (yearFrom, yearTo) => {
  let msg;
  if (yearFrom <= yearTo) {
    
    procesedDataSet1 = process(yearFrom, yearTo, 1);
    procesedDataSet2 = process(yearFrom, yearTo, 2);
    procesedDataSet3 = process(yearFrom, yearTo, 3);
    procesedDataSet4 = process(yearFrom, yearTo, 4);

    msg = "Select the date range";
  } else {
    msg = (
      <>
        Year <b>From</b> should be less or equal to year <b>To</b>
      </>
    );
  }
  return msg;
};

function process(yearFrom, yearTo, dataSetNumber){

  var dataSetCollection;

  switch(dataSetNumber){
    case 1:
      dataSetCollection = chartDataSet1;
      break;
    case 2: 
      dataSetCollection = chartDataSet2;
      break;
    case 3:
       dataSetCollection = chartDataSet3;
       break;
    case 4: 
       dataSetCollection = chartDataSet4;
       break;
    default:
      dataSetCollection = new Map();
      break;
  }

  var arr = {};
  
  Object.keys(dataSetCollection).forEach(function(key, valueIndex) {
    
    var count =  0;

    for(let collectionIndex = 0; collectionIndex < dataSetCollection[key][valueIndex]['chartDataArray'].length; collectionIndex++){

      var arrayKey = dataSetCollection[key][valueIndex]['chartName'];

      arr[arrayKey] = arr[arrayKey] || [];
    
      for(let yearIndex = yearFrom; yearIndex - 1 < yearTo; yearIndex++){                  
    
        count += parseInt(dataSetCollection[key][valueIndex]['chartDataArray'][collectionIndex].yearData[yearIndex]);
      }
     
      arr[arrayKey].push({name : dataSetCollection[key][valueIndex]['chartDataArray'][collectionIndex].name,  y: count, chartType:key });
    }
  });

  return arr;
}

export default dataProcessing;
export { procesedDataSet1, procesedDataSet2, procesedDataSet3, procesedDataSet4 };