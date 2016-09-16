import React, {Component} from 'react';

export default class HouseList extends Component{
	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temp</th>
						<th>Else</th>

					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>

		);
	}
}

// function mapStateToProps ({houseData}){
// 	return {houseData};
// }

// export default connect(mapStateToProps)(HouseList)