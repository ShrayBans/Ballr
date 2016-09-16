import React, {Component} from 'react';

 	

export default class ButtonItem extends Component {
	constructor (props){
		super(props)
	}

	render(){
		
		return (
				<button 
				className= "buttons"
				onClick= {this.props.removeData} 
				value={this.props.zip}>
					{this.props.zip}
				 </button>
					
			);
	}
}