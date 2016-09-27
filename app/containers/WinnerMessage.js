import React, { Component } from 'react';
import {connect} from 'react-redux';

@connect((store) => {
	return {
		winner: store.winner
	}
})

export default class WinnerMessage extends Component {
	render() {
		var {name, ballrScore} = this.props.winner;
		return(
			<Message name={name} ballrScore={ballrScore} />
		)
	}
}

const Message = (props) => {
	if(props.name.length > 0) {
		return (
			<div className="center winnerMessage">
				<div>{props.name} is the <strong>BEST</strong></div>
				<div>He got a <strong>Ballr</strong> Score of: <span className="score">{props.ballrScore}</span></div>
			</div>
		)
	}
	else return (<div></div>)

}