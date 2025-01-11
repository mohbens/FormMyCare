import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";
import i18n from "../utils/i18n";
import { useTranslation } from "react-i18next";

export default function Reinitialiser() {
	const { t } = useTranslation();
	const initialValues = {
		email: "",
	};
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const validate = () => {
		let tempErrors = {};

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		tempErrors.email = emailRegex.test(values.email) ? "" : t("InvalidEmail");

		setErrors(tempErrors);

		return Object.values(tempErrors).every((x) => x === "");
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (validate()) {
			console.log("Form submitted successfully!");
			setValues(initialValues);
			setErrors({});
		} else {
			console.log("Validation errors:", errors);
		}
	};
	return (
		<Box component="form" onSubmit={handleSubmit}>
			<TextField
				name="email"
				value={values.email}
				onChange={handleInputChange}
				label={t("email") + "*"}
				placeholder={t("email")}
				sx={{ width: "100%", mb: 2 }}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AlternateEmailIcon />
						</InputAdornment>
					),
				}}
				error={!!errors.email}
				helperText={errors.email}
			/>
			<Button
				type="submit"
				sx={{ height: "42px", width: "100%" }}
				color="primary"
				variant="contained">
				{t("btnForgot")}
			</Button>

			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Link
					to="/login"
					style={{
						marginTop: "20px",
						color: "red",
						marginBottom: "0px",
						textDecoration: "none",
					}}>
					{t("ForgotLink1")}
				</Link>
				<Link
					to="/register"
					style={{
						marginTop: "20px",
						color: "red",
						marginBottom: "0px",
						textDecoration: "none",
					}}>
					{t("ForgotLink2")}
				</Link>
			</Box>
		</Box>
	);
}
