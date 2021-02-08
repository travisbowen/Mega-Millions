import react from "react";
import { retrieveData } from "./util";
import "./App.css";

function App() {
	// Pulls in past drawings as json data
	retrieveData();

	return (
		<div className='App'>
			<h1>HI</h1>
		</div>
	);
}

export default App;
