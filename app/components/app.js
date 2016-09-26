import React, {Component} from 'react';
import PlayerTable from '../containers/PlayerTable.js';
import SearchBar from '../containers/SearchBar.js';

export default class App extends Component {

	render() {
		return(
			<div>

				<button className="btn btn-danger">
				x
				</button>
				<div className="header">
					<img src="../../stephencurry.jpg"/>
					<h1>Ballr</h1>
				</div>
				<SearchBar />
				<PlayerTable />
			</div>
		)
	}
}