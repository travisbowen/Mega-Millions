import { useEffect, useState } from "react";
import "./styles/app.scss";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import LatestNumbers from "./components/LatestNumbers";
import Drawer from "./components/Drawer";
import PrizePool from "./components/PrizePool";

function App() {
	const [data, setData] = useState([]);
	const [items, setItems] = useState([
		"Winning Numbers",
		"Last Month Numbers",
		"Last Year Numbers",
		"All Time Numbers",
		"Random Number Generator",
		"Prize Pool",
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
	}, []);

	// data in Array
	// data.draw_date
	// data.mega_ball
	// data.multiplier
	// data.winning_numbers
	return (
		<div className='app'>
			<h1>Mega Millions Statistics</h1>
			<Drawer items={items} />
			<PrizePool />
			{/* {data && data.length > 0 ? (
				<LatestNumbers data={data[0]} />
			) : (
				"...Loading"
			)} */}
		</div>
	);
}

export default App;
