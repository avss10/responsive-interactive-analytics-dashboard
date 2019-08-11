import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import "./App.css";
import template from "./components/template";
import Selection from "./components/Selection";
import Dashboard from "./components/Dashboard.jsx";
import dataProcessing, {
  procesedDataSet1,
  procesedDataSet2,
  procesedDataSet3,
  procesedDataSet4
} from "./components/dataProcessing";

class App extends Component {
  state = template;

  copyDataSeries = (obj = {}) => {
    this.setState({
      ...obj,

      charts: [
        { serie: Object.values(procesedDataSet1)[0], title: Object.keys(procesedDataSet1)[0]},
        { serie: Object.values(procesedDataSet2)[0], title: Object.keys(procesedDataSet2)[0]},
        { serie: Object.values(procesedDataSet3)[0], title: Object.keys(procesedDataSet3)[0]},
        { serie: Object.values(procesedDataSet4)[0], title: Object.keys(procesedDataSet4)[0]}
      ]
    });
  };
  componentDidMount() {
    dataProcessing(this.state.yearFrom, this.state.yearTo, this.state.msg);
    this.copyDataSeries();
  }

  handleSubmit = e => {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
    e.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.yearFrom !== this.state.yearFrom) {
      this.handleChangeSelect();
    }
    if (prevState.yearTo !== this.state.yearTo) {
      this.handleChangeSelect();
    }
  }
  handleChangeSelect() {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
  }

  handleChangeYear = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <>
        <div className="container  mb-5 pb-3 bg-light">
          <div
            className={
              "text-center mb-0 pt-5 bold " +
              (this.state.msg !== "Select the range" ? "text-danger" : "")
            }
          >
          <strong>{this.state.msg}</strong>
          </div>
          <Selection
            yearFrom={this.state.yearFrom}
            yearTo={this.state.yearTo}
            onChangeYear={this.handleChangeYear}
            onSubmit={this.handleSubmit}
          />
          <Dashboard
            userConfig={this.state.userConfig}
            charts={this.state.charts}
          />
        </div>
      </>
    );
  }
}

class ParentApp extends App {

  render() {
    return (
      <div>
        <div className="container bg-light">
          <h2 className="text-center text-bold mt-5">
            Response Interactive Analytics Dashboard
          </h2>
        </div>
        <div class = "container mb-5 pb-3 bg-light">
          <ReactToPrint
            trigger={() => <button class = "float-right align-center" href="#">Print this out!</button>}
            content={() => this.componentRef}
          />
          <App ref={el => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default ParentApp;