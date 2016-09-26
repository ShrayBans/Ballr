import React from 'react';

export default const TableHeader = () => {

	render() {
		return(
			<div>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>FG%</th>
					<th>FT%</th>
					<th>3PT%</th>
					<th>AST</th>
					<th>STL</th>
					<th>BLK</th>
					<th>TOV</th>
					<th>PTS</th>
				</tr>
			</div>
		)
	}
}