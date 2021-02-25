import React, { useEffect, useState } from "react";
import "./styles/app.scss";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import LatestNumbers from "./components/LatestNumbers";
import Drawer from "./components/Drawer";
import PrizePool from "./components/PrizePool";
import {dateConverter} from "./util.js"

function App() {
	const [data, setData] = useState([]);
	const [items, setItems] = useState([
		{ title: "Winning Numbers", route: "/latest" },
		{ title: "Last Month Numbers", route: "/month" },
		{ title: "Last Year Numbers", route: "/year" },
		{ title: "All Time Numbers", route: "/all" },
		{ title: "Random Number Generator", route: "/random" },
		{ title: "Prize Pool", route: "/prize" },
	]);

	useEffect(() => {
		// Pulls in past drawings as json data
		const retrieveLottoData = async () => {
			await axios
				.get(`https://data.ny.gov/resource/5xaw-6ayf.json`)
				.then((res) => {
					setData(res.data);
				})
				.catch((error) => console.log(error));
		};

		retrieveLottoData();
		dateConverter(data);
	},[]);

	// data in Array
	// data.draw_date
	// data.mega_ball
	// data.multiplier
	// data.winning_numbers
	return (
		<Router>
			<div className='app'>
				<h1>Mega Millions Statistics</h1>
				<Drawer items={items} />
				<Switch>
					<Route path='/latest'>
						<LatestNumbers data={data[0]} />
					</Route>
					<Route path='/prize'>
						<PrizePool />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
