import React, { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "../utils/i18n";
import PublicPage from "../components/PublicPage.jsx";
import { Box, Button, Checkbox, FormControlLabel, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../utils/i18n";
import MyEmail from "../components/Fields/MyEmail.jsx";
import MyPswrd from "../components/Fields/MyPswrd.jsx";

export default function Login() {
	const { t } = useTranslation();
	const initialValues = {
		email: "",
		password: "",
	};

	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const validate = () => {
		let tempErrors = {};

		tempErrors.password = values.password ? "" : t("Required");

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		tempErrors.email = emailRegex.test(values.email) ? "" : t("InvalidEmail");

		setErrors(tempErrors);

		return Object.values(tempErrors).every((x) => x === "");
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
	return (
		<div>
			<PublicPage
				icon={
					<LockOpenIcon sx={{ width: "50px", height: "50px", mr: "8px" }} />
				}
				pageTitle="titlePLogin">
				<Box component="form" onSubmit={handleSubmit}>
					<Grid display={"grid"} gridTemplateColumns={"1fr "} gap={2} container>
						<MyEmail
							Name="email"
							Value={values.email}
							OnChange={handleChange}
							Error={!!errors.email}
							HelperText={errors.email}
						/>
						{/* <TextField
						name="email"
						label={t("email") + "*"}
						value={values.email}
						onChange={handleInputChange}
						sx={{ width: "100%", mb: 2 }}
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment position="start">
										<AlternateEmailIcon />
									</InputAdornment>
								),
							},
						}}
						error={!!errors.email}
						helperText={errors.email}
					/> */}

						<Box>
							<MyPswrd
								Name="password"
								Value={values.password}
								OnChange={handleInputChange}
								Error={!!errors.password}
								HelperText={errors.password}
							/>
							{/* <FormControl sx={{ width: "100%" }} variant="outlined">
								<InputLabel htmlFor="outlined-adornment-password">
									{t("psw") + "*"}
								</InputLabel>
								<OutlinedInput
									name="password"
									value={values.password}
									onChange={handleInputChange}
									error={!!errors.password}
									helperText={errors.password}
									label={t("psw") + "*"}
									id="outlined-adornment-password"
									type={showPassword ? "text" : "password"}
									startAdornment={
										<InputAdornment position="start">
											<VpnKeyIcon />
										</InputAdornment>
									}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end">
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
								/>
								<FormHelperText id="password-helper-text" error>
									{errors.password}
								</FormHelperText>
							</FormControl> */}
						</Box>
					</Grid>

					<Box>
						<FormControlLabel
							sx={{
								mt: 2,
								"& .MuiFormControlLabel-label": {
									fontWeight: 600,
									color: "black",
								},
							}}
							control={<Checkbox />}
							label={t("StayCo")}
						/>
					</Box>

					<Button
						type="submit"
						sx={{ width: "100%", mt: 2, height: "42px" }}
						color="primary"
						variant="contained">
						{t("btnLogin")}
					</Button>

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							fontSize: "1rem",
						}}>
						<Link
							to={"/forgot-password"}
							style={{ color: "red", textDecoration: "none" }}>
							{t("LoginLink1")}
						</Link>
						<Link
							to={"/register"}
							style={{ color: "red", textDecoration: "none" }}>
							{t("LoginLink2")}
						</Link>
					</Box>
				</Box>
			</PublicPage>
		</div>
	);
}
