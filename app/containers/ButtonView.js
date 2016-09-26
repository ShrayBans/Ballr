import React, { Component } from 'react';
import {connect} from 'react-redux';
import { incrementVal } from '../actions/application';

@connect((store) => {
	return {
		button: store.button
	}
})

export default class ButtonView extends Component {

	render() {
		return(
			<div>
				<button onClick={() => {this.props.dispatch(incrementVal())}}>Increment</button>
				<div>{this.props.button}</div>
			</div>
		)
	}
}