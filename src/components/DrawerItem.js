import React from "react";

const DrawerItem = ({ item }) => {
	return (
		<div className='drawer-item'>
			<h3>
				<a href={item.route}>{item.title}</a>
			</h3>
		</div>
	);
};

export default DrawerItem;
