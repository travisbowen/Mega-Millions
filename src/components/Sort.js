import React, { useState } from "react";
import Balls from "./Balls";
import {dateConverter,allTimeSort,yearSort,monthSort,numSearchSort} from "./../util.js"



const Sort = ({ data }) => {
	//console.log(allTimeSort(data))
	return (
		
		<div className='latest-numbers'>
            <table>
            <thead>
				{/* Row Titles */}
				<tr>
					<th>All Winning Numbers</th>
                </tr>
            </thead>
            <tbody>
			{numSearchSort(data,"70").slice(0,10).map((item) => {
                
                return (
                    <tr key={item.draw_date}>
					<td className='column1'>
                    {dateConverter(item.draw_date) + ': ' + item.winning_numbers}
					</td>
                </tr>
                )}
                )}
        </tbody>
        </table>
		</div>
	);
};

export default Sort;