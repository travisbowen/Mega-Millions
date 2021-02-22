import React from "react";

const PrizeBall = ({ numberOfBalls, yellowBall }) => {
	let content = [];
	for (let i = 1; i < numberOfBalls; i++) {
		content.push(<div className='ball'></div>);
	}
	if (yellowBall) {
		content.push(<div className='ball-yellow'></div>);
	}
	return content;
};

export default PrizeBall;
