import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import BarChartCont from '../components/BarChartCont';
import ZipBar from '../components/ZipBar';
import axios from 'axios';

var barData = [
	  { 
	    "name": "ZipCodes",
	    "values": []
	  }, 
	];
var houseJson;
var newZip;

export default class App extends Component {
	constructor(props){
		super(props)
		this.searchEnter = this.searchEnter.bind(this)
		this.removeData = this.removeData.bind(this)
		this.state = {};
	}

	componentDidMount() {
	    axios.get('http://localhost:3000/json')
	    	.then(function(data){
	    		houseJson = data.data.list.region;
	    	});
	}

	addData (zip, money){
		barData[0].values.push({"x": zip, "y":  money})
	}

	removeData(event){
		for(var prop of barData[0].values){
			if(prop.x == event.target.value){
				console.log('before',barData[0].values)
				barData[0].values.splice(barData[0].values.length-1, 1);
				console.log('after',barData[0].values)
			}
		}
		this.setState({})
	}


	searchEnter(zip){
		var tempObj = {};
		for(var prop of houseJson){
			if (prop.name[0] == zip ) {
				tempObj[zip] = parseInt(prop.zindex[0]._)/1000000;
				tempObj['lastZip'] = zip;
				this.setState (tempObj)
				this.addData(zip, parseInt(prop.zindex[0]._)/1000000 );
				break;
			}
		}
	}

  render() {

    return (
    	<div>
	      <SearchBar searchEnter = {this.searchEnter} />
	      <BarChartCont barData = {barData} />
	      <ZipBar removeData = {this.removeData} zipCodes = {this.state} />
	    </div>
    );
  }
}
