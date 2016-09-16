import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHouse, getZip } from '../actions/index'

class SearchBar extends Component {
	constructor(props){
		super(props)
		this.state = {letter: ''};
		this.handleChange = this.handleChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	handleChange(event){
		this.setState({letter: event.target.value})
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.searchEnter(this.state.letter);
		this.setState({letter: ''});
	}

	render(){
		return (
			<form onSubmit = {this.onFormSubmit} className = 'input-group searchBar'>
				<input 
					placeholder='Enter a zip code in Los Angeles'
					className = 'form-control'
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

function MapDispatchToProps(dispatch) {
	return bindActionCreators({fetchHouse, getZip}, dispatch)
}

export default connect(null, MapDispatchToProps)(SearchBar)