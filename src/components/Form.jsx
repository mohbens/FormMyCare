import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {
	Autocomplete,
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputAdornment,
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
import { deepOrange, lime, purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const initialValues = {
	civilité: "male",
	langue: "Français",
	prenom: "",
	nom: "",
	profession: "Chirurgien Dentiste",
	specialité: "",
	pays: "France",
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
			<Grid container spacing={2} justifyContent="center" alignItems="center">
				<Grid
					item
					sx={{ justifyContent: "space-between" }}
					style={{ display: "flex", width: "100%" }}>
					<Grid sx={{ width: "48%" }}>
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
					</Grid>
					<FormControl sx={{ width: "48%" }}>
						<InputLabel id="demo-simple-select-helper-label">
							Langue *
						</InputLabel>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={values.langue}
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
						placeholder="Prenom"
						name="prenom"
						value={values.prenom}
						onChange={handleInputChange}
						sx={{ width: "48%" }}
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
					/>
					<TextField
						variant="outlined"
						label="Nom *"
						placeholder="Nom"
						name="nom"
						value={values.nom}
						onChange={handleInputChange}
						sx={{ width: "48%" }}
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
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
							disabled
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={values.profession}
							label="Profession *"
							sx={{ width: "100%" }}
							onChange={handleInputChange}>
							<MenuItem value="Chirurgien Dentiste">
								Chirurgien Dentiste
							</MenuItem>
							{/* <MenuItem value="Anglais">Anglais</MenuItem> */}
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
						<InputLabel id="demo-simple-select-helper-label">Pays *</InputLabel>
						<Select
							label="Pays*"
							value={country}
							defaultValue={values.pays}
							onChange={(e) => setCountry(e.target.value)}
							sx={{ width: "100%" }}>
							{countries.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "48%",
						}}>
						<Autocomplete
							style={{ scrollbarwidth: "thin" }}
							options={cities}
							inputValue={inputValue}
							onInputChange={(event, newInputValue) => {
								setInputValue(newInputValue);
								console.log("newInput", newInputValue);
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Ville *"
									variant="outlined"
									InputLabelProps={{
										style: { fontWeight: 600 },
									}}
								/>
							)}
							// onChange={(event, newValue) => {}}
							sx={{ width: "70%" }}
							componentsProps={{
								paper: {
									sx: {
										"&::-webkit-scrollbar": {
											width: "20px",
										},
										"&::-webkit-scrollbar-track": {
											backgroundColor: "orange",
										},
										"&::-webkit-scrollbar-thumb": {
											backgroundColor: "green",
											borderRadius: 2,
										},
										mt: "4px",
										width: "265px",
										maxHeight: "500px",
										border: "2px solid rgba(0, 0, 255 )",
										scrollbarwidth: "thin",
									},
								},
							}}
						/>
						<TextField
							InputLabelProps={{
								style: { fontWeight: 600 },
							}}
							label="CP"
							variant="outlined"
							disabled
							value={CP}
							sx={{ width: "27%" }}
						/>{" "}
					</Box>
				</Grid>
				{/* //////////////////5em ligne ///////////// */}
				<Grid
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "48%",
						}}>
						<TextField
							InputLabelProps={{
								style: { fontWeight: 600 },
							}}
							label="Numéro *"
							placeholder="Numéro"
							sx={{ width: "48%" }}></TextField>
						<TextField
							InputLabelProps={{
								style: { fontWeight: 600 },
							}}
							label="boîte"
							placeholder="Box"
							sx={{ width: "48%" }}></TextField>
					</Box>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						label="Adresse *"
						placeholder="Adresse"
						sx={{ width: "48%" }}></TextField>
				</Grid>
				{/* //////////////////6em ligne ///////////// */}
				<Grid
					sx={{
						justifyContent: "space-between",
						width: "100%",
						display: "flex",
					}}>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						label="Téléphone *"
						placeholder="Téléphone"
						sx={{ width: "48%" }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PhoneIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						label="Mobile *"
						placeholder="Mobile"
						sx={{ width: "48%" }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SmartphoneIcon />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				{/* //////////////////6em ligne ///////////// */}
				<Grid
					sx={{
						justifyContent: "space-between",
						width: "100%",
						display: "flex",
					}}>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						label="Email *"
						placeholder="Email"
						sx={{ width: "48%" }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AlternateEmailIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						label="Confirmation *"
						placeholder="Confirmation"
						sx={{ width: "48%" }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AlternateEmailIcon />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid
					sx={{
						width: "100%",

						justifyContent: "center",
						alignItems: "center",
					}}>
					<Button
						sx={{
							width: "100%",
							mb: "24px",
							height: "42px",
							fontSize: "0.9375rem",
						}}
						color="primary"
						variant="contained">
						CRéER VOTRE COMPTE
					</Button>
					<Link to="/login" style={{ color: "red", textDecoration: "none" }}>
						Deja membre ?S'identifier
					</Link>
				</Grid>
			</Grid>
		</form>
	);
}
