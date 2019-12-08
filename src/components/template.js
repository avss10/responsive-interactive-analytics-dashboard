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

const template = {
  userConfig: {
    plotOptions: {
      pie: {
        showInLegend: true,
        innerSize: "60%",
        dataLabels: {
          enabled: false,
          distance: -14,
          color: "white",
          style: {
            fontweight: "bold",
            fontsize: 50
          }
        }
      }
    }
  },
  filterValue1: filterData[0],
  filterValue2: filterData[filterData.length - 1],
  msg: "Select the range"
};

export default template;
