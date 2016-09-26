import React, {Component} from 'react';
import PlayerTable from '../containers/PlayerTable.js';
import SearchBar from '../containers/SearchBar.js';

export default class App extends Component {

	render() {
		return(
			<div>
				<SearchBar />
				<PlayerTable />
			</div>
		)
	}
}