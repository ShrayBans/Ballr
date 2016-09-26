import React from 'react';
import PlayerTable from '../containers/PlayerTable.js'

export default class App extends React.Component {

	render() {
		return(
			<div>
				<SearchBar />
				<PlayerTable />
			</div>
		)
	}
}