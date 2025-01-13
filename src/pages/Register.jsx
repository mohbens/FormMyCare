import {
	Autocomplete,
	Button,
	FormControl,
	FormControlLabel,
	InputAdornment,
	InputLabel,
	MenuItem,
	RadioGroup,
	Select,
	TextField,
	Radio,
	styled,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/register.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import "../utils/i18n";
import PublicPage from "../components/PublicPage.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import Grid from "@mui/material/Grid";
import CPFr from "../data/france.json";
import CPBl from "../data/belgique.json";

const initialValues = {
	civilité: "male",
	langue: "Frençais",
	prenom: "",
	nom: "",
	profession: "Chirurgien Dentiste",
	specialité: "",
	pays: "france",
	ville: "",
	cp: "",
	numero: "",
	boite: "",
	adresse: "",
	telephone: "",
	email: "",
	confirmation: "",
};
export default function Register() {
	const [values, setValues] = useState(initialValues);
	// const [country, setCountry] = useState("France");
	const [cities, setCities] = useState([]);
	const [inputValue, setInputValue] = useState("");
	// const [CP, setCP] = useState("");
	const { t } = useTranslation();

	const countries = [
		{ value: "france", label: t("CountFr"), data: CPFr },
		{ value: "belgique", label: t("CountBel"), data: CPBl },
	];

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
			ville: "",
			cp: "",
		}));

		/////////////////////////////charger les villes
		const selectedCountry = countries.find(
			(country) => country.value === value
		);

		if (selectedCountry) {
			setCities(selectedCountry.data);
			setInputValue("");
		} else {
			setCities([]);
		}
	}; ////////////////////////////////////////////////////

	const handleCityChange = (event, newValue) => {
		if (newValue) {
			setValues({
				...values,
				ville: newValue.name,
				cp: newValue.code,
			});
		}
	};

	///////////////////Validation//////////////////////////////////////////
	//Numero regex
	const [errors, setErrors] = useState({});
	const NumRegex = /^[0-9]{10,}$/;

	const validate = () => {
		let temp = {};
		temp.civilité = values.civilité ? "" : t("Required");
		temp.langue = values.langue ? "" : t("Required");
		temp.prenom = values.prenom ? "" : t("Required");
		temp.nom = values.nom ? "" : t("Required");
		temp.pays = values.pays ? "" : t("Required");
		temp.ville = values.ville ? "" : t("Required");
		temp.numero = NumRegex.test(values.numero) ? "" : t("Required");
		temp.adresse = values.adresse ? "" : t("Required");
		temp.mobile = values.mobile ? "" : t("Required");

		// Email regex
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		temp.email = emailRegex.test(values.email) ? "" : t("InvalidEmail");

		// Confirmation email
		temp.confirmation =
			values.confirmation === values.email ? "" : t("EmailConf");

		setErrors(temp);

		return Object.values(temp).every((x) => x === "");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validate()) {
			console.log("Form submitted successfully!");
		} else {
			console.log("Validation errors:", errors);
		}
	};
	//////////////////////////////////////////////////////////////////////////////

	//////////////////Scrollbar color///////////////////
	const CustomAutocomplete = styled("ul")(({ theme }) => ({
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
		<div>
			<PublicPage
				icon={
					<PersonAddAlt1Icon
						sx={{ width: "50px", height: "50px", mr: "8px" }}
					/>
				}
				pageTitle="titlePRegister">
				{/* <Form /> */}
				<form onSubmit={handleSubmit}>
					<Grid
						display={"grid"}
						gridTemplateColumns={"1fr 1fr"}
						gap={2}
						container
						// spacing={2}
						// justifyContent="center"
						// alignItems="flex-start"
					>
						<Grid item>
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
									control={<Radio />}
									label={t("male")}
								/>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label={t("Mrs.")}
								/>
							</RadioGroup>
						</Grid>

						<Grid item>
							<FormControl fullWidth>
								<InputLabel id="langue-label">{t("language")}* </InputLabel>
								<Select
									labelId="langue-label"
									id="langue-select"
									value={values.langue}
									label={t("language")}
									onChange={handleInputChange}
									name={t("language")}>
									<MenuItem value={t("french")}>{t("french")}</MenuItem>
									<MenuItem value={t("english")}>{t("english")}</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item>
							<TextField
								InputLabelProps={{
									style: { fontWeight: 600 },
								}}
								variant="outlined"
								label={t("firstName") + " *"}
								placeholder={t("firstName")}
								// name={t("firstName")}
								name="prenom"
								value={values.prenom}
								onChange={handleInputChange}
								fullWidth
								error={!!errors.prenom}
								helperText={errors.prenom}
							/>
						</Grid>

						<Grid item>
							<TextField
								InputLabelProps={{
									style: { fontWeight: 600 },
								}}
								variant="outlined"
								label={t("lastName") + " *"}
								placeholder={t("lastName")}
								name="nom"
								value={values.nom}
								onChange={handleInputChange}
								fullWidth
								error={!!errors.nom}
								helperText={errors.nom}
							/>
						</Grid>

						<Grid item>
							<FormControl fullWidth>
								<InputLabel id="profession-label">
									{t("profession") + " *"}
								</InputLabel>
								<Select
									disabled
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									value={values.profession}
									label={t("profession") + " *"}
									sx={{ width: "100%" }}
									onChange={handleInputChange}>
									<MenuItem value={t("CHD")}>{t("CHD")}</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item>
							<FormControl
								fullWidth
								InputLabelProps={{
									style: { fontWeight: 600 },
								}}>
								<InputLabel id="specialite-label">{t("speciality")}</InputLabel>
								<Select
									labelId="specialite-label"
									id="specialite-select"
									value={values.spécialité}
									label={t("speciality")}
									onChange={handleInputChange}
									name="speciality">
									<MenuItem value={t("GD")}>{t("GD")}</MenuItem>
									<MenuItem value={t("Endo")}>{t("Endo")}</MenuItem>
									<MenuItem value={t("Maxilo")}>{t("Maxilo")}</MenuItem>
									<MenuItem value={t("Ortho")}>{t("Ortho")}</MenuItem>
									<MenuItem value={t("Perio")}>{t("Perio")}</MenuItem>
									<MenuItem value={t("Pedod")}>{t("Pedod")}</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item>
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
						<Grid container item sx={{ justifyContent: "space-between" }}>
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
											error={!!errors.ville}
											helperText={errors.ville}
										/>
									)}
									// onChange={(event, newValue) => {}}
									// sx={{ width: "70%" }}
									ListboxComponent={CustomAutocomplete}
									componentsProps={{
										paper: {
											sx: {
												mt: "4px",
												width: "265px",
												maxHeight: "500px",
												border: "2px solid rgba(0, 0, 255 )",
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
									label={t("CP")}
									variant="outlined"
									disabled
									value={values.cp}
									// sx={{ width: "27%" }}
								/>
							</Grid>
						</Grid>
						{/* </Grid> */}
						<Grid container item sx={{ justifyContent: "space-between" }}>
							<Grid item xs={5.9} sm={5.8}>
								<TextField
									InputLabelProps={{
										style: { fontWeight: 600 },
									}}
									variant="outlined"
									label={t("number") + "*"}
									placeholder={t("number")}
									name="number"
									value={values.numéro}
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
									label={t("box")}
									placeholder={t("box")}
									name="boîte"
									value={values.boîte}
									onChange={handleInputChange}
									fullWidth
								/>
							</Grid>
						</Grid>
						<Grid item>
							<TextField
								InputLabelProps={{
									style: { fontWeight: 600 },
								}}
								variant="outlined"
								label={t("adress") + "*"}
								placeholder={t("adress")}
								name="adresse"
								value={values.adresse}
								onChange={handleInputChange}
								fullWidth
								error={!!errors.adresse}
								helperText={errors.adresse}
							/>
						</Grid>

						<Grid item>
							<TextField
								InputLabelProps={{
									style: { fontWeight: 600 },
								}}
								variant="outlined"
								label={t("phone") + "*"}
								placeholder={t("phone")}
								name="téléphone"
								value={values.téléphone}
								// value={`+33${values.téléphone}`}
								onChange={(e) => {
									const value = e.target.value;
									if (/^\d{0,13}$/.test(value)) {
										handleInputChange(e);
									}
								}}
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

						<Grid item>
							<TextField
								variant="outlined"
								label={t("mobile") + "*"}
								placeholder={t("mobile")}
								name="mobile"
								value={values.mobile}
								// value={`+33${values.mobile}`}
								onChange={(e) => {
									const value = e.target.value;
									if (/^\d{0,13}$/.test(value)) {
										handleInputChange(e);
									}
								}}
								inputProps={{ maxLength: 13 }}
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

						<Grid item>
							<TextField
								variant="outlined"
								label={t("email") + "*"}
								placeholder={t("email")}
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

						<Grid item>
							<TextField
								variant="outlined"
								label={t("confirmation") + "*"}
								placeholder={t("confirmation")}
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
								error={!!errors.confirmation}
								helperText={errors.confirmation}
							/>
						</Grid>
					</Grid>
					{/* Submit */}
					<Grid item>
						<Button
							type="submit"
							sx={{
								width: "100%",
								mt: "24px",
								mb: "24px",
								height: "42px",
								fontSize: "0.9375rem",
							}}
							color="primary"
							variant="contained">
							{t("BtnRegister")}
						</Button>

						<Link to="/login" style={{ color: "red", textDecoration: "none" }}>
							{t("RegisterLink1")}
						</Link>
					</Grid>
				</form>
			</PublicPage>
		</div>
	);
}
