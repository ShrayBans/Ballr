import React from 'react';
import TableHeader from '../components/TableHeader.js'
import PlayerRow from '../components/PlayerRow.js'
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/api';

@connect((store) => {
	return {
		users: store.players.players;
	}
})

export default class App extends React.Component {

	render() {
		return(
			<div>
				<table>
					<TableHeader />
					<PlayerRow />
				</table>
			</div>
		)
	}
}