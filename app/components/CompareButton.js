import React from 'react';

const CompareButton = (props) => {
	if (props.length > 0) {
		return (
			<div className="center">
				<button 
					onClick={props.pressCompare}
					className="btn btn-success btn-lg">
						Compare Players
				</button>
				<button
					className="btn btn-danger btn-lg resetButton"
					onClick={props.pressReset}
					>
					Reset Players
				</button>
			</div>
		)
	}
	else return (<div></div>);
};

export default CompareButton;