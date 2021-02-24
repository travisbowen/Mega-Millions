import React from "react";
import { Link } from "react-router-dom";

const DrawerItem = ({ item }) => {
	return (
		<div className='drawer-item'>
			<h3>
				<Link to={item.route}>{item.title}</Link>
			</h3>
		</div>
	);
};

export default DrawerItem;
