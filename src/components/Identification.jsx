import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../utils/i18n";

export default function Identification() {
	const { t } = useTranslation();
	const initialValues = {
		email: "",
		password: "",
	};

	const [values, setValues] = useState(initialValues);
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const validate = () => {
		let tempErrors = {};

		tempErrors.password = values.password ? "" : t("Required");

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		tempErrors.email = emailRegex.test(values.email) ? "" : t("InvalidEmail");

		setErrors(tempErrors);

		return Object.values(tempErrors).every((x) => x === "");
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
				// InputProps={{
				// 	startAdornment: (
				// 		<InputAdornment position="start">
				// 			<AlternateEmailIcon />
				// 		</InputAdornment>
				// 	),
				// }}
				error={!!errors.email}
				helperText={errors.email}
			/>

			<Box>
				<FormControl sx={{ width: "100%" }} variant="outlined">
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
				</FormControl>
			</Box>

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
				<Link to={"/register"} style={{ color: "red", textDecoration: "none" }}>
					{t("LoginLink2")}
				</Link>
			</Box>
		</Box>
	);
}
