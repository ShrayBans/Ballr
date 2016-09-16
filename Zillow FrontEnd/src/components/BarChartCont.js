import {BarChart} from 'react-d3'
import React, {Component} from 'react';

 	

export default class BarChartCont extends Component {
	constructor (props){
		super(props)
	}

	render(){
		return (
				<BarChart 
		      	  className = "barChart"
		       	  data={this.props.barData}
		      	  width={800}
		      	  height={400}
		      	  fill={'#7DC22F'}
		      	  title='Cost per Zip Code in Los Angeles'
		      	  yAxisLabel='Money ($ in millions)'
		      	  xAxisLabel='Zip Codes'
	    	    />
			);
	}
}