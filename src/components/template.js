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
  yearFrom: "2001",
  yearTo: "2015",
  msg: "Select the range"
};

export default template;
