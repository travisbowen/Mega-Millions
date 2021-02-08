import axios from "axios";

export const retrieveData = () => {
	axios.get(`https://data.ny.gov/resource/5xaw-6ayf.json`).then((res) => {
		console.log(res.data);
	});
};
