import React, {Component} from 'react';
import ButtonItem from './ButtonItem'
 	

export default class ZipBar extends Component {
	constructor (props){
		super(props)
	}

	

	render(){
		var codes = Object.keys(this.props.zipCodes)
		// console.log(codes)
		// var array = codes.map(function(item){ 
		// 	console.log('LOLOL:', item)
		// 	console.log(this.props.removeData)
		// 	return  (<ButtonItem zip= {codes[0]} removeData={this.props.removeData} />);
		// });
		return (
				<div className ='zipBox'>
					Remove Last Zip <br/>

					<ButtonItem zip= {codes[0]} removeData={this.props.removeData} />
				</div>
			);
	}
}