import React, { Component } from 'react';
import { fetchPlayers } from '../actions/api';
import {connect} from 'react-redux';

@connect((store) => {
	return {};
})

export default class SearchBar extends Component {
	constructor(props){
		super(props)
		this.state = {letter: ''};
		this.handleChange = this.handleChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	handleChange(event){
		this.setState({letter: event.target.value})
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.dispatch(fetchPlayers(this.state.letter));
		this.setState({letter: ''});
	}

	render(){
		return (
			<form onSubmit = {this.onFormSubmit} className = 'input-group searchBar'>
				<input 
					placeholder='Enter an NBA Player Name'
					className = 'form-control searchBar'
					value={this.state.letter}
					onChange = {this.handleChange}
				/>
				<span className ='input-group-btn'>
					<button type ='submit' className = 'btn btn-secondary'> Submit </button>
				</span>
			</form>
			)
	}
}