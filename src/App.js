import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import "./App.css";
import template from "./components/template";
import Selection from "./components/Selection";
import Dashboard from "./components/Dashboard.jsx";
import { chartDataSet1, chartDataSet3, chartDataSet4, chartDataSet2 } from "./data-source/data";
import dataProcessing, {
  procesedDataSet1,
  procesedDataSet2,
  procesedDataSet3,
  procesedDataSet4
} from "./components/dataProcessing";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  state = template;

  constructor(props) {
    super(props);
      this.fileVarible = {
        selectedFile: null,
        loaded:0
    }
 }

 onChangeHandler=event=>{
    // this.setState({
    //   selectedFile: event.target.files[0],
    //   loaded: 0,
    // })
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var preview = document.getElementById('show-text');
      var file = document.querySelector('input[type=file]').files[0];
      var reader = new FileReader()

      var textFile = /javascript.*/;

      if (file.type.match(textFile)) {
         reader.onload = function (event) {
           preview.innerHTML = event.target.result;
           let { chartDataSet1, chartDataSet3, chartDataSet4, chartDataSet2 } = event.target.result;
           console.log(chartDataSet2);
         }
      } else {
         preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
      }
      reader.readAsText(file);

    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  }

  onClickHandler = () => {

    const data = new FormData()
    
    data.append('file', this.fileVarible.selectedFile)
    axios.post("http://localhost:8000/upload", data, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
     })
    .then(res => { 
      console.log(res)
      console.log(res.statusText)
      toast.success('Upload success')
    })
    .catch(err => { 
      toast.error('Upload fail')
    })
  }

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

    dataProcessing(this.state.filterValue1, this.state.filterValue2, chartDataSet1, chartDataSet2, chartDataSet3, chartDataSet4);
    this.copyDataSeries();
  }

  handleSubmit = e => {
    let msg = dataProcessing(this.state.filterValue1, this.state.filterValue2, chartDataSet1, chartDataSet2, chartDataSet3, chartDataSet4);
    this.copyDataSeries({ msg: msg });
    e.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterValue1 !== this.state.filterValue1) {
      this.handleChangeSelect();
    }
    if (prevState.filterValue2 !== this.state.filterValue2) {
      this.handleChangeSelect();
    }
    if(this.files){
      
      this.handleChangeSelect();
    }
  }

  handleChangeSelect() {
    let msg = dataProcessing(this.state.filterValue1, this.state.filterValue2, chartDataSet1, chartDataSet2, chartDataSet3, chartDataSet4);
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
        <div className="form-group">
          <ToastContainer />
        </div>
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
            filterValue1={this.state.filterValue1}
            filterValue2={this.state.filterValue2}
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
      <div className="container">
        <div className="container bg-light">
          <h2 className="container text-center text-bold mt-5">
            Response Interactive Analytics Dashboard
          </h2>
        </div>
        <div className="mt-1 pb-2 bg-light">
          <div align ="center">
            <label>Import report (.js)</label>
          </div>
          <div align ="center">
            <input type="file" name="file" onChange={this.onChangeHandler}/>
            <button type="button" className="btn btn-success" onClick={this.onClickHandler}>Upload</button>
            <div id="show-text">Choose text File</div>
          </div>
        </div>
        <div className="mt-1 pb-2 bg-light">
          <div align ="center">
            <label>Export report</label>
          </div>
          <div align ="center">
            <ReactToPrint trigger={() => <button href="#">Export report (.js)</button>} content={() => this.componentRef}/>
          </div>
        </div>
        <div className="mt-1 pb-2 bg-light">
          <div align ="center">
            <label>Print report</label>
          </div>
          <div align ="center">
            <ReactToPrint trigger={() => <button href="#">Print pdf</button>} content={() => this.componentRef}/>
          </div>
        </div>
        <div className = "container mt-2 pb-3 bg-light">
          <App ref={el => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default ParentApp;