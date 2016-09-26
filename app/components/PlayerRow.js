import React from 'react';

const PlayerRow = (props) => {
		const {pic, name, fg_pct, ft_pct, fg3_pct, ast, stl, blk, tov, pts, index, pressX} = props;
		return(
				<tr className="info">
					<td>{name}</td>
					<td>{fg_pct}</td>
					<td>{ft_pct}</td>
					<td>{fg3_pct}%</td>
					<td>{ast}</td>
					<td>{stl}</td>
					<td>{blk}</td>
					<td>{tov}</td>
					<td>{pts}</td>
					<td 
						onClick={() => pressX(index)}
						className="redX"
					>x</td>
				</tr>
		)
}

export default PlayerRow;
