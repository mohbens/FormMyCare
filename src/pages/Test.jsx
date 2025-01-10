import React, { useEffect, useState } from "react";
import {
	RadioGroup,
	FormControlLabel,
	Radio,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	Button,
	Grid,
	Autocomplete,
	InputAdornment,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import franceData from "../data/france.json";
import belgiumData from "../data/belgique.json";
import { Link } from "react-router-dom";

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

	const [errors, setErrors] = useState({});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const validate = () => {
		let temp = {};
		temp.civilité = values.civilité ? "" : "champ requis";
		temp.langue = values.langue ? "" : "champ requis";
		temp.prenom = values.prenom ? "" : "champ requis";
		temp.nom = values.nom ? "" : "champ requis";
		temp.pays = values.pays ? "" : "champ requis";
		temp.ville = values.ville ? "" : "champ requis";
		temp.numéro = values.numéro ? "" : "champ requis";
		temp.adresse = values.adresse ? "" : "champ requis";
		temp.mobile = values.mobile ? "" : "champ requis";

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		temp.email = emailRegex.test(values.email) ? "" : "email is not valid";

		// Confirmation email validation
		temp.confirmation =
			values.confirmation === values.email
				? ""
				: "confirmation must match email";

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

	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={2} justifyContent="center" alignItems="center">
				<Grid item xs={6}>
					<RadioGroup
						row
						name="civilité"
						value={values.civilité}
						onChange={handleInputChange}>
						<FormControlLabel value="male" control={<Radio />} label="M." />
						<FormControlLabel value="female" control={<Radio />} label="Mme" />
					</RadioGroup>
					{errors.civilité && (
						<span style={{ color: "red" }}>{errors.civilité}</span>
					)}
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel id="langue-label">Langue *</InputLabel>
						<Select
							labelId="langue-label"
							id="langue-select"
							value={values.langue}
							onChange={handleInputChange}
							name="langue">
							<MenuItem value="Français">Français</MenuItem>
							<MenuItem value="Anglais">Anglais</MenuItem>
						</Select>
					</FormControl>
					{errors.langue && (
						<span style={{ color: "red" }}>{errors.langue}</span>
					)}
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
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

				{/* Other fields remain unchanged */}

				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						label="Email *"
						placeholder="Email"
						name="email"
						value={values.email}
						onChange={handleInputChange}
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
						fullWidth
						error={!!errors.confirmation}
						helperText={errors.confirmation}
					/>
				</Grid>

				{/* Submit button */}
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
};

export default MyForm;
