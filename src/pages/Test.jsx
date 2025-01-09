import React, { useEffect, useState } from "react";
import {
	// Grid,
	RadioGroup,
	FormControlLabel,
	Radio,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	Button,
	Box,
	Autocomplete,
	InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";
import franceData from "../data/france.json";
import belgiumData from "../data/belgique.json";
const MyForm = () => {
	const [values, setValues] = useState({
		civilité: "",
		langue: "",
		prenom: "",
		nom: "",
		profession: "Chirurgien Dentiste",
		spécialité: "",
		pays: "France",
		ville: "",
		CP: "",
		numéro: "",
		boîte: "",
		adresse: "",
		téléphone: "",
		mobile: "",
		email: "",
		confirmation: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
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
				<Grid item xs={6}>
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
						<FormControlLabel value="male" control={<Radio />} label="M." />
						<FormControlLabel value="female" control={<Radio />} label="Mme" />
					</RadioGroup>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="langue-label">Langue *</InputLabel>
						<Select
							labelId="langue-label"
							id="langue-select"
							value={values.langue}
							label="Langue *"
							onChange={handleInputChange}
							name="langue">
							<MenuItem value="Français">Français</MenuItem>
							<MenuItem value="Anglais">Anglais</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						variant="outlined"
						label="Prénom *"
						placeholder="Prénom"
						name="prenom"
						value={values.prenom}
						onChange={handleInputChange}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						variant="outlined"
						label="Nom *"
						placeholder="Nom"
						name="nom"
						value={values.nom}
						onChange={handleInputChange}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="profession-label">Profession *</InputLabel>
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
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl
						fullWidth
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}>
						<InputLabel id="specialite-label">Spécialité</InputLabel>
						<Select
							labelId="specialite-label"
							id="specialite-select"
							value={values.spécialité}
							label="Spécialité"
							onChange={handleInputChange}
							name="spécialité">
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
				{/* <Grid
					container
					item
					spacing={2}
					sx={{ display: "flex", justifyContent: "space-between" }}> */}
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="pays-label">Pays *</InputLabel>
						<Select
							id="pays-select"
							value={values.pays}
							label="Pays *"
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
							// sx={{ width: "70%" }}
							componentsProps={{
								paper: {
									sx: {
										mt: "4px",
										width: "265px",
										maxHeight: "500px",
										border: "2px solid rgba(0, 0, 255 )",
										scrollbarwidth: "thin",
									},
								},
							}}
						/>
					</Grid>

					<Grid item xs={3.5} sm={3.5}>
						<TextField
							InputLabelProps={{
								style: { fontWeight: 600 },
							}}
							label="CP"
							variant="outlined"
							disabled
							value={CP}
							// sx={{ width: "27%" }}
						/>
					</Grid>
				</Grid>
				{/* </Grid> */}
				<Grid
					container
					item
					xs={12}
					sm={6}
					sx={{ justifyContent: "space-between" }}>
					<Grid item xs={5.9} sm={5.8}>
						<TextField
							InputLabelProps={{
								style: { fontWeight: 600 },
							}}
							variant="outlined"
							label="Numéro *"
							placeholder="Numéro"
							name="numéro"
							value={values.numéro}
							onChange={handleInputChange}
							fullWidth
						/>
					</Grid>

					<Grid item xs={5.9} sm={5.8}>
						<TextField
							InputLabelProps={{
								style: { fontWeight: 600 },
							}}
							variant="outlined"
							label="Boîte"
							placeholder="Box"
							name="boîte"
							value={values.boîte}
							onChange={handleInputChange}
							fullWidth
						/>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						variant="outlined"
						label="Adresse *"
						placeholder="Adresse"
						name="adresse"
						value={values.adresse}
						onChange={handleInputChange}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						InputLabelProps={{
							style: { fontWeight: 600 },
						}}
						variant="outlined"
						label="Téléphone *"
						placeholder="Téléphone"
						name="téléphone"
						value={values.téléphone}
						onChange={handleInputChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PhoneIcon />
								</InputAdornment>
							),
						}}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						label="Mobile *"
						placeholder="Mobile"
						name="mobile"
						value={values.mobile}
						onChange={handleInputChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SmartphoneIcon />
								</InputAdornment>
							),
						}}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						label="Email *"
						placeholder="Email"
						name="email"
						value={values.email}
						onChange={handleInputChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AlternateEmailIcon />
								</InputAdornment>
							),
						}}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						label="Confirmation *"
						placeholder="Confirmation"
						name="confirmation"
						value={values.confirmation}
						onChange={handleInputChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AlternateEmailIcon />
								</InputAdornment>
							),
						}}
						fullWidth
					/>
				</Grid>

				{/* Bouton d'envoi */}
				<Grid item xs={12}>
					<Button
						sx={{
							width: "100%",
							mb: "24px",
							height: "42px",
							fontSize: "0.9375rem",
						}}
						color="primary"
						variant="contained">
						CRÉER VOTRE COMPTE
					</Button>
					{/* Lien vers la page de connexion */}
					<Link to="/login" style={{ color: "red", textDecoration: "none" }}>
						Déjà membre ? S'identifier
					</Link>
				</Grid>
			</Grid>
		</form>
	);
};

export default MyForm;
