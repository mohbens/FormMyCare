import React, { useState, useEffect } from "react";
import {
	TextField,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
} from "@mui/material";

const CityZipCodeSelector = () => {
	const [cities, setCities] = useState([]);
	const [selectedCity, setSelectedCity] = useState("");
	const [zipCode, setZipCode] = useState("");

	useEffect(() => {
		// Fetch your JSON data here
		fetch("/path/to/your/cities.json")
			.then((response) => response.json())
			.then((data) => {
				setCities(data);
			});
	}, []);

	const handleCityChange = (event) => {
		const city = event.target.value;
		setSelectedCity(city);

		// Find the selected city's zip code
		const selectedCityData = cities.find((item) => item.city === city);
		if (selectedCityData) {
			setZipCode(selectedCityData.zipCode);
		} else {
			setZipCode("");
		}
	};

	return (
		<div>
			<FormControl fullWidth variant="outlined">
				<InputLabel id="city-select-label">Select City</InputLabel>
				<Select
					labelId="city-select-label"
					value={selectedCity}
					onChange={handleCityChange}
					label="Select City">
					{cities.map((city) => (
						<MenuItem key={city.city} value={city.city}>
							{city.city}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<TextField
				label="Zip Code"
				value={zipCode}
				variant="outlined"
				margin="normal"
				fullWidth
				InputProps={{
					readOnly: true,
				}}
			/>
		</div>
	);
};

export default CityZipCodeSelector;
