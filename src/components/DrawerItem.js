import React from "react";

const DrawerItem = ({ item }) => {
	return (
		<div className='drawer-item'>
			<h3>{item}</h3>
		</div>
	);
};

export default DrawerItem;
