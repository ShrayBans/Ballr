import React, { Component } from 'react';
import TableHeader from '../components/TableHeader.js'
import PlayerRow from '../components/PlayerRow.js'
import {connect} from 'react-redux';
let name;

@connect((store) => {
	return {
		players: store.players
	}
})

export default class PlayerTable extends Component {

	render() {
		var playerArr = this.props.players.map((item, i) => {
			name = item.firstName+ " " +item.lastName;
			return <PlayerRow 
				key={i}

				name={name} 
				fg_pct={item.fg_pct}
				ft_pct={item.ft_pct}
				fg3_pct={item.fg3_pct}
				ast={item.ast}
				stl={item.stl}
				blk={item.blk}
				tov={item.tov}
				pts={item.pts}
				/>
		}) 

		return(
			<div>
				<table className="table table-inverse table-bordered">
					<TableHeader />
					<tbody>
						{playerArr}	
					</tbody>
				</table>
			</div>
		)
	}
}