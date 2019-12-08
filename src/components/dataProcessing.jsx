import React from "react";

let procesedDataSet1 = [],
procesedDataSet2 = [],
procesedDataSet3 = [],
procesedDataSet4 = [];

let dataProcessing = (filterValue1, filterValue2, chartDataSet1, chartDataSet3, chartDataSet4, chartDataSet2) => {
  let msg;
  if (filterValue1 <= filterValue2) {
    
    procesedDataSet1 = process(filterValue1, filterValue2, chartDataSet1);
    procesedDataSet2 = process(filterValue1, filterValue2, chartDataSet2);
    procesedDataSet3 = process(filterValue1, filterValue2, chartDataSet3);
    procesedDataSet4 = process(filterValue1, filterValue2, chartDataSet4);

    msg = "Select the date range";
  } else {
    msg = (
      <>
        First filter value <b>From</b> should be less or equal to second filter value <b>To</b>
      </>
    );
  }
  return msg;
};

function process(filterValue1, filterValue2, dataSetCollection){

  var arr = {};
  
  console.log(dataSetCollection);

  Object.keys(dataSetCollection).forEach(function(key, valueIndex) {
    
    var count =  0;

    for(let collectionIndex = 0; collectionIndex < dataSetCollection[key][valueIndex]['chartDataArray'].length; collectionIndex++){

      var arrayKey = dataSetCollection[key][valueIndex]['chartName'];

      arr[arrayKey] = arr[arrayKey] || [];
    
      for(let filterIndex = filterValue1; filterIndex - 1 < filterValue2; filterIndex++){                  
    
        count += parseInt(dataSetCollection[key][valueIndex]['chartDataArray'][collectionIndex].data[filterIndex]);
      }
     
      arr[arrayKey].push({name : dataSetCollection[key][valueIndex]['chartDataArray'][collectionIndex].name,  y: count, chartType:key });
    }
  });

  return arr;
}

export default dataProcessing;
export { procesedDataSet1, procesedDataSet2, procesedDataSet3, procesedDataSet4 };