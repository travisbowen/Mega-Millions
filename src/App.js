import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CircularProgress from "@material-ui/core/CircularProgress";

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
		<div className='App'>
			{data ? (
				data.map((drawing) => {
					return <h1>{drawing.winning_numbers}</h1>;
				})
			) : (
				<CircularProgress />
			)}
		</div>
	);
}

export default App;
