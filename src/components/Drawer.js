import React from "react";
import DrawerItem from "./DrawerItem";

const Drawer = ({ items }) => {
	return (
		<div className='drawer'>
			<div className='drawer_items'>
				{items.map((item) => {
					return <DrawerItem key={item.title} item={item} />;
				})}
			</div>
		</div>
	);
};

export default Drawer;
