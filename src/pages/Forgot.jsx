import React from "react";
import PublicPage from "../components/PublicPage.jsx";
import PasswordIcon from "@mui/icons-material/Password";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../utils/i18n";
import { useTranslation } from "react-i18next";
import MyEmail from "../components/Fields/MyEmail.jsx";

export default function Forgot() {
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
	// const handleInputChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setValues({
	// 		...values,
	// 		[name]: value,
	// 	});
	// };
	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setValues({
			...values,
			[name]: value,
		});
		if (name === "email") {
			const error = validateEmail(value);
			setErrors({ ...errors, email: error });
		}
	};
	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) {
			return t("Required");
		} else if (!emailRegex.test(email)) {
			return t("InvalidEmail");
		}
		return null;
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
		<div>
			<PublicPage
				icon={
					<PasswordIcon sx={{ width: "50px", height: "50px", mr: "8px" }} />
				}
				pageTitle="titlePForgot">
				<Box component="form" onSubmit={handleSubmit}>
					<Grid display={"grid"} gridTemplateColumns={"1fr "} gap={2} container>
						<MyEmail
							Name="email"
							Value={values.email}
							OnChange={handleChange}
							Error={!!errors.email}
							HelperText={errors.email}
						/>
						<Button
							type="submit"
							sx={{ height: "42px", width: "100%" }}
							color="primary"
							variant="contained">
							{t("btnForgot")}
						</Button>
					</Grid>

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
			</PublicPage>
		</div>
	);
}
