const data = {
  tesla: {
    name: 'Tesla',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 1000000000,
      2: 1250000000,
      3: 990000000,
      4: 1300000000,
    }
  },
  toyota: {
    name: 'Toyota',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 1200000000,
      2: 1300000000,
      3: 1000000000,
      4: 2000000000,
    }
  },
  chevorlet: {
    name: 'Chevy',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 750000000,
      2: 850000000,
      3: 650000000,
      4: 950000000,
    }
  },
  ford: {
    name: 'Ford',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 1750000000,
      2: 1850000000,
      3: 1600000005,
      4: 1900000000,
    }
  },
  honda: {
    name: 'Honda',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 1750000000,
      2: 1950000000,
      3: 1850000000,
      4: 2050000000,
    }
  },
  google: {
    name: 'google',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 2750000000,
      2: 2950000000,
      3: 2850000000,
      4: 2050000000,
    }
  },
  microsoft: {
    name: 'Microsoft',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 3750000000,
      2: 3950000000,
      3: 3850000000,
      4: 3050000000,
    }
  },
  bofa: {
    name: 'Bank of America',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 750000000,
      2: 650000000,
      3: 550000000,
      4: 450000000,
    }
  },
  wellsfargo: {
    name: 'Wells Fargo',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 350000000,
      2: 450000000,
      3: 550000000,
      4: 250000000,
    }
  },
  chase: {
    name: 'Chase',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 750000000,
      2: 950000000,
      3: 550000000,
      4: 1000000000,
    }
  },
  aetna: {
    name: 'aetna',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 1050000000,
      2: 950000000,
      3: 850000000,
      4: 1000000000,
    }
  },
  cigna: {
    name: 'cigna',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 1750000000,
      2: 1950000000,
      3: 1850000000,
      4: 2050000000,
    }
  },
  bluecross: {
    name: 'Blue Cross',
    x_axis: 'price',
    x_unit: '$',
    y_axis: 'time',
    y_unit: 'quarter',
    data: {
      1: 1250000000,
      2: 1350000000,
      3: 1450000000,
      4: 2550000000,
    }
  }
};

// Chart Types can be found here: https://api.highcharts.com/highcharts/plotOptions
var chartDataArray = [];
var chartName;

chartName = "Vehicle industry";
var chartType1 = "pie";
chartDataArray = [data.tesla, data.toyota, data.chevorlet, data.ford, data.honda];
var chartInfo1 = {chartName, chartDataArray} ;

chartName = "IT industry";
var chartType2 = "line";
chartDataArray = [data.google, data.microsoft];
var chartInfo2 = {chartName, chartDataArray};

chartName = "Banking industry";
var chartType3 = "bar";
chartDataArray = [data.bofa, data.wellsfargo, data.chase];
var chartInfo3 = {chartName, chartDataArray};

chartName = "Health insurance industry";
var chartType4 = "area";
chartDataArray = [data.aetna, data.cigna, data.bluecross];
var chartInfo4 = {chartName, chartDataArray};

var chartDataSet1 = {};
chartDataSet1[chartType1] = chartDataSet1[chartType1] || [];
chartDataSet1[chartType1].push(chartInfo1);

var chartDataSet2 = {};
chartDataSet2[chartType2] = chartDataSet2[chartType2] || [];
chartDataSet2[chartType2].push(chartInfo2);

var chartDataSet3 = {};
chartDataSet3[chartType3] = chartDataSet3[chartType3] || [];
chartDataSet3[chartType3].push(chartInfo3);

var chartDataSet4 = {};
chartDataSet4[chartType4] = chartDataSet4[chartType4] || [];
chartDataSet4[chartType4].push(chartInfo4);

export { chartDataSet1, chartDataSet2, chartDataSet3, chartDataSet4 }; 
