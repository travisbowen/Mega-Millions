import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import LatestNumbers from "./components/LatestNumbers";
import PermanentDrawer from "./components/PermanentDrawer";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		// Pulls in past drawings as json data
		retrieveLottoData();
	}, []);

	const retrieveLottoData = () => {
		axios
			.get(`https://data.ny.gov/resource/5xaw-6ayf.json`)
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => console.log(error));
	};

	// data in Array
	// data.draw_date
	// data.mega_ball
	// data.multiplier
	// data.winning_numbers
	return (
		<div className='app'>
			<PermanentDrawer />
			<h1>Hi</h1>
			{data ? <LatestNumbers data={data[0]} /> : <CircularProgress />}
		</div>
	);
}

export default App;
