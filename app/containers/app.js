import React from 'react';
import {connect} from 'react-redux';

import 
import {fetchPlayers} from '../actions/api';

@connect((store) => {
	return {
		users: store.players.players;
	}
})

export default class App extends React.Component {
	componentWillMount() {
		this.props.fetchUsers();
	}

	render() {
		return(
			<div>
				WOW
			</div>
		)
	}
}