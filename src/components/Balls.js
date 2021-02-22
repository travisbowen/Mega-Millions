import React from "react";

const Balls = ({ numbers, multiplier }) => {
	const numArray = numbers.split(" ");

	return (
		<div className='balls-container'>
			{numArray.map((number) => (
				<div key={number} className='number-circle'>
					{number}
				</div>
			))}
			<div className='number-circle-multiplier'>{multiplier}</div>
		</div>
	);
};

export default Balls;
