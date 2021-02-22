import React from "react";

const PrizeBall = ({ numberOfBalls, yellowBall }) => {
	const getNumBalls = (numBalls, yellowTrue) => {
		let content = [];
		for (let i = 0; i < numBalls; i++) {
			content.push(<div className='ball'></div>);
		}
		if (yellowTrue) {
			content.push(<div className='ball-yellow'></div>);
		}
		return content;
	};

	return (
		<div className='balls-container'>
			{getNumBalls(numberOfBalls, yellowBall)}
		</div>
	);

	// let content = [];
	// for (let i = 1; i < numberOfBalls; i++) {
	// 	content.push(<div className='ball'></div>);
	// }
	// if (yellowBall) {
	// 	content.push(<div className='ball-yellow'></div>);
	// }
	// return content;
};

export default PrizeBall;
