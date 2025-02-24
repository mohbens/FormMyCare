import { Autocomplete, Button, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import "../styles/register.css";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import "../utils/i18n.js";
import PublicPage from "../components/PublicPage.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import CPFr from "../data/france.json";
import CPBl from "../data/belgique.json";
import MyRadio from "../components/Fields/MyRadio.jsx";
import MySelect from "../components/Fields/MySelect.jsx";
import MyPhone from "../components/Fields/MyPhone.jsx";
// import MyMobile from "../components/Fields/MyMobile.jsx";
import MyEmail from "../components/Fields/MyEmail.jsx";
import MyConfirmation from "../components/Fields/MyConfirmation.jsx";
import MyTextField from "../components/Fields/MyTextField.jsx";
// import PhoneIcon from "@mui/icons-material/Phone";

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
	Prefix: "+33",
	telephone: "",
	email: "",
	confirmation: "",
};
export default function Register() {
	const { t } = useTranslation();
	const [values, setValues] = useState(initialValues);
	const [cities, setCities] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
		if (name === "email") {
			const error = validateEmail(value);
			setErrors({ ...errors, email: error });
		}
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
			ville: "",
			cp: "",
		}));
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

	const countries = [
		{ value: "France", label: t("CountFr"), data: CPFr, prefix: "+33" },
		{ value: "Belgique", label: t("CountBel"), data: CPBl, prefix: "+32" },
	];

	const [prefix, setPrefix] = useState(countries[0].prefix);
	// const [selectedCountry, setSelectedCountry] = useState("");

	const handleCountryChange = (event) => {
		const selectedCount = event.target.value;

		const country = countries.find((e) => e.value === selectedCount);

		console.log("country", country);
		setPrefix(country.prefix);

		console.log("prefixaaaa", country.prefix);
		console.log("prefixbbbbbb", values.Prefix);
	};

	///////////////////Validation//////////////////////////////////////////
	//Numero regex
	const [errors, setErrors] = useState({});
	const NumRegex = /^[0-9]{10,}$/;
	// const NumRegexa = /^[0-9]{10,}$/;

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) {
			return t("Required");
		} else if (!emailRegex.test(email)) {
			return t("InvalidEmail");
		}
		return null;
	};
	const validate = () => {
		let temp = {};
		temp.civilité = values.civilité ? "" : t("Required");
		temp.langue = values.langue ? "" : t("Required");
		temp.prenom = values.prenom ? "" : t("Required");
		temp.nom = values.nom ? "" : t("Required");
		temp.profession = values.profession ? "" : t("Required");
		temp.pays = values.pays ? "" : t("Required");
		temp.ville = values.ville ? "" : t("Required");
		temp.numero = NumRegex.test(values.numero) ? "" : t("Required");
		temp.adresse = values.adresse ? "" : t("Required");
		temp.mobile = values.mobile ? "" : t("Required");
		temp.email = values.email ? "" : t("Required");

		// Confirmation email
		if (!values.confirmation) {
			temp.confirmation = t("Required");
			if (values.confirmation !== values.email) {
				temp.confirmation = temp.confirmation += "\n" + t("EmailConf");
			}
		} else if (values.confirmation !== values.email) {
			temp.confirmation = t("EmailConf");
		} else {
			temp.confirmation = "";
		}
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
	///////////////////////Data/////////////////////////////////
	const GenderRadio = [
		{
			label: t("male"),
			value: "male",
		},
		{
			label: t("female"),
			value: "female",
		},
	];
	const LangSelect = [
		{
			label: t("french"),
			value: "french",
		},
		{
			label: t("english"),
			value: "english",
		},
	];

	const ProfSelect = [
		{
			label: t("CHD"),
			value: "CHD",
		},
	];
	const SpecialitySelect = [
		{
			label: t("GD"),
			value: "GD",
		},
		{
			label: t("Endo"),
			value: "Endo",
		},
		{
			label: t("Maxilo"),
			value: "Maxilo",
		},
		{
			label: t("Ortho"),
			value: "Ortho",
		},
		{
			label: t("Perio"),
			value: "Perio",
		},
		{
			label: t("Pedod"),
			value: "Pedod",
		},
	];

	/////////////////////////////////////////////////////////
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
						container>
						<Grid item>
							<MyRadio
								Options={GenderRadio}
								Label={t("gender")}
								Default="male"
								OnChange={handleInputChange}
								isRequired={true}
								error={!!errors.prenom}
								helperText={errors.prenom}
								// Value={values.langue}
								// isDisabled={true}
							/>
						</Grid>

						<Grid item>
							<MySelect
								Options={LangSelect}
								Label={t("language")}
								Default="french"
								OnChange={handleChange}
								// Value={values.langue}
								// Error={!!errors.langue}
								// HelperText={errors.langue}
								// isDisabled={true}
							/>
						</Grid>

						<Grid item>
							<MyTextField
								Variant="outlined"
								Label={t("firstName") + " *"}
								Placeholder={t("firstName")}
								Name="prenoma"
								Value={values.prenom}
								OnChange={handleInputChange}
								Error={!!errors.prenom}
								HelperText={errors.prenom}
							/>
						</Grid>

						<Grid item>
							<MyTextField
								Variant="outlined"
								Label={t("lastName") + " *"}
								Placeholder={t("lastName")}
								Name="nom"
								Value={values.nom}
								OnChange={handleInputChange}
								Error={!!errors.nom}
								HelperText={errors.nom}
							/>
						</Grid>

						<Grid item>
							<MySelect
								Options={ProfSelect}
								Label={t("profession")}
								Default="CHD"
								isDisabled={true}
								// isRequired={true}
								error={!!errors.profession}
								helperText={errors.profession}
							/>
						</Grid>

						<Grid item>
							<MySelect
								Options={SpecialitySelect}
								Label={t("speciality")}

								// Default={t("CHD")}
								// isDisabled={true}
							/>
						</Grid>

						<Grid item>
							<MySelect
								Options={countries}
								Label={t("Country")}
								// value={selectedCountry}
								Default="french"
								OnChange={handleCountryChange}
								error={!!errors.country}
								helperText={errors.country}
								// isDisabled={true}
							/>
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
								<MyTextField
									Variant="outlined"
									label={t("CP")}
									Placeholder={t("CP")}
									variant="outlined"
									name="CP"
									isDisabled={true}
									value={values.cp}
								/>
							</Grid>
						</Grid>
						{/* </Grid> */}
						<Grid container item sx={{ justifyContent: "space-between" }}>
							<Grid item xs={5.9} sm={5.8}>
								<MyTextField
									Variant="outlined"
									Label={t("number") + "*"}
									Placeholder={t("number")}
									Name="number"
									Value={values.numéro}
									OnChange={handleInputChange}
									Error={!!errors.numero}
									HelperText={errors.numero}
								/>
							</Grid>

							<Grid item xs={5.9} sm={5.8}>
								<MyTextField
									Variant="outlined"
									Label={t("box")}
									Placeholder={t("box")}
									Name="boîte"
									Value={values.boîte}
									OnChange={handleInputChange}
								/>
							</Grid>
						</Grid>
						<Grid item>
							<MyTextField
								Variant="outlined"
								Label={t("adress") + "*"}
								Placeholder={t("adress")}
								Name="adresse"
								Value={values.adresse}
								OnChange={handleInputChange}
								Error={!!errors.adresse}
								HelperText={errors.adresse}
							/>
						</Grid>

						<Grid item>
							<MyPhone
								Label={t("phone")}
								PlaceHolder={t("phone")}
								Name="phone"
								Value={values.phone}
								isMobile={false}
								Prefix={prefix}
							/>
						</Grid>

						<Grid item>
							<MyPhone
								Label={t("Mobile ")}
								PlaceHolder={t("Mobile")}
								Name="phone"
								Value={values.phone}
								isMobile={true}
								Prefix={prefix}
								// handleChange={prefix}
								Error={!!errors.confirmation}
								HelperText={errors.confirmation}
							/>
						</Grid>

						<Grid item>
							<MyEmail
								Name="email"
								Value={values.email}
								OnChange={handleChange}
								Error={!!errors.email}
								HelperText={errors.email}
							/>
						</Grid>

						<Grid item>
							<MyConfirmation
								OnChange={handleChange}
								Value={values.confirmation}
								Name="email"
								Error={!!errors.confirmation}
								HelperText={errors.confirmation}
								type="text"
								// onpaste="return false;"
								// ondrop="return false;"
								// autocomplete="off"
							/>
						</Grid>
					</Grid>
					{/* <TextField /> */}
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
