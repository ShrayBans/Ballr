import React, {Component} from 'react';
import PlayerTable from '../containers/PlayerTable.js';
import SearchBar from '../containers/SearchBar.js';
import WinnerMessage from '../containers/WinnerMessage.js';

export default class App extends Component {

	render() {
		return(
			<div>
				<div className="header">
					<img src="../../stephencurry.jpg"/>
					<h1>Ballr</h1>
				</div>
				<WinnerMessage />
				<SearchBar />
				<PlayerTable />
			</div>
		)
	}
}