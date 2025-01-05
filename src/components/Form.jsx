import {
	Autocomplete,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField,
} from "@mui/material";
import { Grid, width } from "@mui/system";
import React, { use, useEffect, useState } from "react";
import franceData from "../data/france.json";
import belgiumData from "../data/belgique.json";

const initialValues = {
	civilité: "male",
	langue: "",
	prenom: "",
	nom: "",
	proffession: "",
	specialité: "",
	pays: "",
	ville: "",
	cp: "",
	numero: "",
	boite: "",
	adresse: "",
	telephone: "",
	email: "",
	confirmation: "",
};

export default function Form() {
	const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const [country, setCountry] = useState("France");
	const [cities, setCities] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [CP, setCP] = useState("");

	const countries = [
		{ value: "france", label: "France" },
		{ value: "belgique", label: "Belgique" },
	];

	useEffect(() => {
		if (country) {
			const data = country === "france" ? franceData : belgiumData;
			setCities(
				// data.map((city) => city.Nom_commune + " (" + city.Code_postal + ")")
				data.map((city) => city.Nom_commune)
			);
		} else {
			setCities([]);
		}
	}, [country]);

	useEffect(() => {
		console.log("cities", cities);
		console.log("inputValue123", inputValue);
		const selectedCityData = cities.find(
			(item) => item.Nom_commune === inputValue
		);
		console.log("selected", selectedCityData);
		if (selectedCityData) {
			setCP(selectedCityData.Code_postal);
			// console.log("", );
		} else {
			setCP("");
		}
	}, [inputValue]);

	return (
		<form>
			<Grid
				container
				spacing={2}
				justifyContent="center"
				alignItems="center"
				// sx={{ padding: "16px" }}
			>
				<Grid
					item
					xs={12}
					sm={6}
					sx={{ justifyContent: "space-between" }}
					style={{ display: "flex", width: "100%" }}>
					<RadioGroup
						sx={{
							border: "1px solid rgba(0, 0, 0, 0.23)",
							borderRadius: "4px",
							padding: "8px",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
						row
						name="civilité"
						value={values.civilité}
						onChange={handleInputChange}>
						<FormControlLabel
							value="male"
							control={
								<Radio
									sx={{
										"&.Mui-checked": {
											color: "rgb(229, 115, 115)",
										},
									}}
								/>
							}
							label="M."
						/>
						<FormControlLabel
							value="female"
							control={
								<Radio
									sx={{
										"&.Mui-checked": {
											color: "rgb(229, 115, 115)",
										},
									}}
								/>
							}
							label="Mme"
						/>
					</RadioGroup>

					<FormControl sx={{ width: "48%" }}>
						<InputLabel id="demo-simple-select-helper-label">
							Langue *
						</InputLabel>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							// value={age}
							label="Langue *"
							sx={{ width: "100%" }}
							onChange={handleInputChange}>
							<MenuItem value="Français">Français</MenuItem>
							<MenuItem value="Anglais">Anglais</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					sx={{ justifyContent: "space-between" }}
					style={{ width: "100%", display: "flex" }}>
					<TextField
						variant="outlined"
						label="Prenom *"
						name="prenom"
						value={values.prenom}
						onChange={handleInputChange}
						sx={{ width: "48%" }}
					/>
					<TextField
						variant="outlined"
						label="Nom *"
						name="nom"
						value={values.nom}
						onChange={handleInputChange}
						sx={{ width: "48%" }}
					/>
				</Grid>
				<Grid
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}>
					<FormControl sx={{ width: "48%" }}>
						<InputLabel id="demo-simple-select-helper-label">
							Profession *
						</InputLabel>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							// value={age}
							label="Profession *"
							sx={{ width: "100%" }}
							onChange={handleInputChange}>
							<MenuItem value="Français">Français</MenuItem>
							<MenuItem value="Anglais">Anglais</MenuItem>
						</Select>
					</FormControl>
					<FormControl sx={{ width: "48%" }}>
						<InputLabel id="demo-simple-select-helper-label">
							Spécialité
						</InputLabel>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							// value={age}
							label="Spécialité"
							sx={{ width: "100%" }}
							onChange={handleInputChange}>
							<MenuItem value="Dentiste Généraliste">
								Dentiste Généraliste
							</MenuItem>
							<MenuItem value="Endodontiste">Endodontiste</MenuItem>
							<MenuItem value="Chirurgien Maxillo-Facial">
								Chirurgien Maxillo-Facial
							</MenuItem>
							<MenuItem value="Orthodontiste">Orthodontiste</MenuItem>
							<MenuItem value="Parodontiste">Parodontiste</MenuItem>
							<MenuItem value="Pédodontiste">Pédodontiste</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				{/* //////////////////////////// */}
				<Grid
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}>
					<FormControl sx={{ width: "48%" }}>
						<InputLabel id="demo-simple-select-helper-label">
							Spécialité
						</InputLabel>
						<Select
							label="Spécialité*"
							value={country}
							// defaultValue={country}
							onChange={(e) => setCountry(e.target.value)}
							sx={{ width: "100%" }}>
							{countries.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<Autocomplete
						options={cities}
						inputValue={inputValue}
						onInputChange={(event, newInputValue) => {
							setInputValue(newInputValue);
							console.log("newInput", newInputValue);
						}}
						renderInput={(params) => (
							<TextField {...params} label="City" variant="outlined" />
						)}
						// onChange={(event, newValue) => {}}
						sx={{ width: "29%" }}
						componentsProps={{
							paper: {
								sx: {
									width: "300px",
									maxHeight: "500px",
								},
							},
						}}
					/>

					<TextField
						label="CP"
						variant="outlined"
						disabled
						value={CP}
						sx={{ width: "15%" }}
					/>
				</Grid>
			</Grid>
		</form>
	);
}
