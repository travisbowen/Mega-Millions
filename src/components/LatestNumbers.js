import React from "react";
import Balls from "./Balls";

const LatestNumbers = ({ data }) => {
	return (
		<div className='latest-numbers'>
			<h1>Latest Winning Numbers</h1>
			<h3>Draw Date: {data.draw_date} </h3>
			<Balls numbers={data.winning_numbers} multiplier={data.multiplier} />
		</div>
	);
};

export default LatestNumbers;
