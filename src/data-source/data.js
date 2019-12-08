const data = {
  coal: {
    name: 'coal',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 1903955,
      2002: 1933131,
      2003: 1973736,
      2004: 1978299,
      2005: 2012874,
      2006: 1990511,
      2007: 2016455,
      2008: 1985800,
      2009: 1755905,
      2010: 1847289,
      2011: 1733431,
      2012: 1514043,
      2013: 1581116,
      2014: 1585696,
      2015: 688439
    }
  },
  pliquids: {
    name: 'petroleum liquids',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 114646,
      2002: 78701,
      2003: 102735,
      2004: 100391,
      2005: 99840,
      2006: 44460,
      2007: 49502,
      2008: 31916,
      2009: 25973,
      2010: 23337,
      2011: 16086,
      2012: 13401,
      2013: 13820,
      2014: 18708,
      2015: 11259
    }
  },
  pcoke: {
    name: 'petroleum coke',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 10235,
      2002: 15865,
      2003: 16671,
      2004: 20753,
      2005: 22386,
      2006: 19706,
      2007: 16235,
      2008: 14325,
      2009: 12964,
      2010: 13725,
      2011: 14096,
      2012: 9787,
      2013: 13344,
      2014: 11781,
      2015: 5439
    }
  },
  ngas: {
    name: 'natural gas',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 639129,
      2002: 691004,
      2003: 649908,
      2004: 710101,
      2005: 760960,
      2006: 816442,
      2007: 896591,
      2008: 882980,
      2009: 920981,
      2010: 987696,
      2011: 1013689,
      2012: 1225895,
      2013: 1124834,
      2014: 1121926,
      2015: 605377
    }
  },
  ogas: {
    name: 'other gas',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 9040,
      2002: 11464,
      2003: 15600,
      2004: 15253,
      2005: 13462,
      2006: 14177,
      2007: 13454,
      2008: 11705,
      2009: 10632,
      2010: 11313,
      2011: 11566,
      2012: 11897,
      2013: 12854,
      2014: 11576,
      2015: 6062
    }
  },
  nuclear: {
    name: 'nuclear',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 768825,
      2002: 780064,
      2003: 763734,
      2004: 788527,
      2005: 781987,
      2006: 787218,
      2007: 806426,
      2008: 806207,
      2009: 798854,
      2010: 806966,
      2011: 790205,
      2012: 1514043,
      2013: 789016,
      2014: 7970,
      2015: 396415
    }
  },
  chydroelectric: {
    name: 'conventional hydro electric',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 216962,
      2002: 264331,
      2003: 275804,
      2004: 268417,
      2005: 270322,
      2006: 289246,
      2007: 247512,
      2008: 254830,
      2009: 273445,
      2010: 260204,
      2011: 319355,
      2012: 276241,
      2013: 268565,
      2014: 258747,
      2015: 134317
    }
  },
  wind: {
    name: 'wind',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 6737,
      2002: 10353,
      2003: 11185,
      2004: 14144,
      2005: 17811,
      2006: 26590,
      2007: 34449,
      2008: 55361,
      2009: 73886,
      2010: 94653,
      2011: 120178,
      2012: 140822,
      2013: 167841,
      2014: 181791,
      2015: 93876
    }
  },
  solar: {
    name: 'solar',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 543,
      2002: 556,
      2003: 533,
      2004: 577,
      2005: 550,
      2006: 509,
      2007: 609,
      2008: 865,
      2009: 888,
      2010: 1211,
      2011: 1818,
      2012: 4326,
      2013: 9037,
      2014: 18320,
      2015: 13025
    }
  },
  geothermal: {
    name: 'geo thermal',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 13740,
      2002: 14490,
      2003: 14423,
      2004: 14811,
      2005: 14692,
      2006: 14567,
      2007: 14638,
      2008: 14841,
      2009: 15008,
      2010: 15221,
      2011: 15317,
      2012: 15561,
      2013: 15773,
      2014: 16628,
      2015: 8389
    }
  },
  biomass: {
    name: 'bio mass',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 49749,
      2002: 53708,
      2003: 53342,
      2004: 53537,
      2005: 54278,
      2006: 54862,
      2007: 55539,
      2008: 55033,
      2009: 54493,
      2010: 56090,
      2011: 56673,
      2012: 57622,
      2013: 60856,
      2014: 64319,
      2015: 30663
    }
  },
  wood: {
    name: 'wood',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 35199,
      2002: 38663,
      2003: 37529,
      2004: 38117,
      2005: 38857,
      2006: 38762,
      2007: 39014,
      2008: 37299,
      2009: 36050,
      2010: 37172,
      2011: 37449,
      2012: 37798,
      2013: 40027,
      2014: 43051,
      2015: 20532
    }
  },
  otherbio: {
    name: 'other bio fuel',
    x_axis: 'energy',
    x_unit: 'tWh',
    y_axis: 'time',
    y_unit: 'year',
    data: {
      2001: 14549,
      2002: 15044,
      2003: 15811,
      2004: 15421,
      2005: 15419,
      2006: 16097,
      2007: 16525,
      2008: 17733,
      2009: 18440,
      2010: 18918,
      2011: 19222,
      2012: 19823,
      2013: 20830,
      2014: 21270,
      2015: 10132
    }
  }
};

// Chart Types can be found here: https://api.highcharts.com/highcharts/plotOptions
var chartDataArray = [];
var chartName;

chartName = "Fossil Fuel";
var chartType1 = "pie";
chartDataArray = [data.coal, data.pliquids, data.pcoke, data.ngas, data.ogas];
var chartInfo1 = {chartName, chartDataArray} ;

chartName = "Hydroelectric Energy";
var chartType2 = "line";
chartDataArray = [data.nuclear, data.chydroelectric];
var chartInfo2 = {chartName, chartDataArray};

chartName = "Biomass";
var chartType3 = "bar";
chartDataArray = [data.wind, data.solar, data.geothermal];
var chartInfo3 = {chartName, chartDataArray};

chartName = "Renewable Energy";
var chartType4 = "area";
chartDataArray = [data.biomass, data.wood, data.otherbio];
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
