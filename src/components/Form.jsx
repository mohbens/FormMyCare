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
import Grid from "@mui/material/Grid";
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

	///////////////////Validation//////////////////////////////////////////
	const [errors, setErrors] = useState({});

	const validate = () => {
		let temp = {};
		temp.civilité = values.civilité ? "" : "champ requis";
		temp.langue = values.langue ? "" : "champ requis";
		temp.prenom = values.prenom ? "" : "champ requis";
		temp.nom = values.nom ? "" : "champ requis";
		temp.pays = values.pays ? "" : "champ requis";
		temp.ville = values.ville ? "" : "champ requis";
		temp.numero = values.numero ? "" : "champ requis";
		temp.adresse = values.adresse ? "" : "champ requis";
		temp.mobile = values.mobile ? "" : "champ requis";

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		temp.email = emailRegex.test(values.email) ? "" : "email is not valid";

		// Confirmation email validation
		temp.confirmation =
			values.confirmation === values.email
				? ""
				: "La confirmation doit correspondre à l'email";

		setErrors(temp);

		return Object.values(temp).every((x) => x === "");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validate()) {
			console.log("Form submitted successfully!");
			// Handle successful submission logic here
		} else {
			console.log("Validation errors:", errors);
			// Handle error display logic here
		}
	};
	/////////////////////////////////////////////////////////////////////////////////
	return (
		<form onSubmit={handleSubmit}>
			<Grid
				container
				spacing={2}
				justifyContent="center"
				alignItems="flex-start">
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
						error={!!errors.prenom}
						helperText={errors.prenom}
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
						error={!!errors.nom}
						helperText={errors.nom}
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
									error={!!errors.ville}
									helperText={errors.ville}
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
							error={!!errors.numero}
							helperText={errors.numero}
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
						error={!!errors.adresse}
						helperText={errors.adresse}
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
						error={!!errors.mobile}
						helperText={errors.mobile}
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
						error={!!errors.email}
						helperText={errors.email}
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
						error={!!errors.nom}
						helperText={errors.nom}
					/>
				</Grid>

				{/* Submit */}
				<Grid item xs={12}>
					<Button
						type="submit"
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

					<Link to="/login" style={{ color: "red", textDecoration: "none" }}>
						Déjà membre ? S'identifier
					</Link>
				</Grid>
			</Grid>
		</form>
	);
}
