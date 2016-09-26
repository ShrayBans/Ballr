import React from 'react';

const TableHeader = () => {

		return(
			<thead>
				<tr>
					<th className="picRow"></th>
					<th>Name</th>
					<th>FG%</th>
					<th>FT%</th>
					<th>3PT%</th>
					<th>AST</th>
					<th>STL</th>
					<th>BLK</th>
					<th>TOV</th>
					<th>PTS</th>
					<th className="center">X</th>
				</tr>
			</thead>
		)
};

export default TableHeader;