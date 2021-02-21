import React from "react";

const Balls = ({ numbers, multiplier }) => {
	const numArray = numbers.split(" ");

	return (
		<div className='balls-container'>
			{numArray.map((number) => (
				<div key={number} className='numberCircle'>
					{number}
				</div>
			))}
			<div className='numberCircle-multiplier'>{multiplier}</div>
		</div>
	);
};

export default Balls;
