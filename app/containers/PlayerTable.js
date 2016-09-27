import React, { Component } from 'react';
import TableHeader from '../components/TableHeader.js';
import PlayerRow from '../components/PlayerRow.js';
import CompareButton from '../components/CompareButton.js';
import {deletePlayer, comparePlayers, resetPlayers} from '../actions/application';
import {connect} from 'react-redux';
let name;

@connect((store) => {
	return {
		players: store.players
	}
})

export default class PlayerTable extends Component {
	pressX(i) {
		this.props.dispatch(deletePlayer(i));
	}

	pressCompare() {
		this.props.dispatch(comparePlayers(this.props.players));
	}

	pressReset() {
		this.props.dispatch(resetPlayers());
	}

	render() {
		var playerArr = this.props.players.map((item, i) => {
			name = item.firstName+ " " +item.lastName;
			return <PlayerRow 
				key={i}
				winner={item.winner}
				index={i}
				pic={item.pic}
				name={name} 
				fg_pct={item.fg_pct}
				ft_pct={item.ft_pct}
				fg3_pct={item.fg3_pct}
				ast={item.ast}
				stl={item.stl}
				blk={item.blk}
				tov={item.tov}
				pts={item.pts}
				pressX = {this.pressX.bind(this)}
				/>
		});

		return(
			<div>
				<table className="table table-inverse table-condensed table-bordered">
					<TableHeader />
					<tbody>
						{playerArr}	
					</tbody>
				</table>
				<CompareButton pressCompare= {this.pressCompare.bind(this)} pressReset={this.pressReset.bind(this)} length={playerArr.length} />
			</div>
		)
	}
}