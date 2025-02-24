import React, { useEffect, useState } from "react";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	Button,
	Grid,
	Autocomplete,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import CPFr from "../data/france.json";
import CPBl from "../data/belgique.json";
import { styled } from "@mui/material/styles";
const MyForm = () => {
	const initialValues = {
		pays: "France",
		ville: "",
		cp: "",
	};

	const [values, setValues] = useState(initialValues);
	const [cities, setCities] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const { t } = useTranslation();

	const countries = [
		{ value: "france", label: "France", data: CPFr },
		{ value: "belgique", label: "Belgique", data: CPBl },
	];

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
			ville: "",
			cp: "",
		}));

		const selectedCountry = countries.find(
			(country) => country.value === value
		);
		if (selectedCountry) {
			setCities(selectedCountry.data);
			setInputValue("");
		} else {
			setCities([]);
		}
	};

	const handleCityChange = (event, newValue) => {
		if (newValue) {
			setValues({
				...values,
				ville: newValue.name,
				cp: newValue.code,
			});
		}
	};
	const CustomAutocompleteListbox = styled("ul")(({ theme }) => ({
		maxHeight: "200px",
		overflowY: "auto",
		padding: 0,
		margin: 0,

		"&::-webkit-scrollbar": {
			width: "8px",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: " rgb(229, 57, 53)",
		},
		"&::-webkit-scrollbar-thumb:hover": {
			backgroundColor: "#555",
		},
		"&::-webkit-scrollbar-track": {
			background: "#f1f1f1",
		},
	}));

	return (
		<form>
			<Grid item xs={12} sm={6}>
				<FormControl fullWidth>
					<InputLabel id="pays-label">{t("Country")} *</InputLabel>
					<Select
						id="pays-select"
						value={values.pays}
						label={t("Country") + "*"}
						onChange={handleInputChange}
						name="pays">
						{countries.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>

			<Grid
				container
				item
				xs={12}
				sm={6}
				sx={{ justifyContent: "space-between" }}>
				<Grid item xs={8.15} sm={8.15}>
					<Autocomplete
						options={cities}
						getOptionLabel={(option) => option.name}
						inputValue={inputValue}
						onInputChange={(event, newInputValue) => {
							setInputValue(newInputValue);
						}}
						onChange={handleCityChange}
						renderInput={(params) => (
							<TextField
								{...params}
								label={t("city") + "*"}
								variant="outlined"
								InputLabelProps={{
									style: { fontWeight: 600 },
								}}
							/>
						)}
						ListboxComponent={CustomAutocompleteListbox}
					/>
				</Grid>

				<Grid item xs={3.5} sm={3.5}>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						label={t("CP")}
						variant="outlined"
						disabled
						value={values.cp}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default MyForm;
