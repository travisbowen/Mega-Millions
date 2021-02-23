import React from "react";
import PrizeBall from "./PrizeBall";

const PrizePool = () => {
	return (
		<table>
			<thead>
				{/* Row Titles */}
				<tr>
					<th>Match</th>
					<th>Winners</th>
					<th>Prize</th>
				</tr>
			</thead>
			<tbody>
				{/* Row 1 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={5} yellowBall={true} />
					</td>
					<td>0</td>
					<td>Jackpot</td>
				</tr>
				{/* Row 2 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={5} yellowBall={false} />
					</td>
					<td>0</td>
					<td>$1 Million</td>
				</tr>
				{/* Row 3 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={4} yellowBall={true} />
					</td>
					<td>4</td>
					<td>$10,000</td>
				</tr>
				{/* Row 4 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={4} yellowBall={false} />
					</td>
					<td>220</td>
					<td>$500</td>
				</tr>
				{/* Row 5 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={3} yellowBall={true} />
					</td>
					<td>620</td>
					<td>$200</td>
				</tr>
				{/* Row 6 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={3} yellowBall={false} />
					</td>
					<td>14,496</td>
					<td>$10</td>
				</tr>
				{/* Row 7 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={2} yellowBall={true} />
					</td>
					<td>13,406</td>
					<td>$10</td>
				</tr>
				{/* Row 8 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={1} yellowBall={true} />
					</td>
					<td>109,638</td>
					<td>$4</td>
				</tr>
				{/* Row 9 */}
				<tr>
					<td className='column1'>
						<PrizeBall numberOfBalls={0} yellowBall={true} />
					</td>
					<td>284,085</td>
					<td>$2</td>
				</tr>
			</tbody>
		</table>
	);
};

export default PrizePool;
