import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@mui/material";
import React, { use, useEffect, useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import "../utils/i18n";
import { useTranslation } from "react-i18next";
export default function Identification() {
	const { t } = useTranslation();
	const initialValues = {
		Email: "",
		Password: "",
	};

	const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const handleMouseUpPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<Box>
			<TextField
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
			/>

			<Box>
				<FormControl sx={{ width: "100%" }} variant="outlined">
					<InputLabel htmlFor="outlined-adornment-password">
						{t("psw") + "*"}
					</InputLabel>

					<OutlinedInput
						label={t("psw") + "*"}
						id="outlined-adornment-password"
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment
								position="end"
								sx={{ display: "flex", justifyContent: "space-between" }}>
								<VpnKeyIcon />
								<IconButton
									aria-label={
										showPassword ? "hide the password" : "display the password"
									}
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									onMouseUp={handleMouseUpPassword}
									edge="end">
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
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
					style={{
						marginTop: "20px",
						color: "red",
						marginBottom: "0px",
						textDecoration: "none",
					}}>
					{t("LoginLink1")}
				</Link>
				<Link
					to={"/register"}
					style={{
						marginTop: "24px",
						color: "red",
						marginBottom: "0px",
						textDecoration: "none",
					}}>
					{t("LoginLink2")}
				</Link>
			</Box>
		</Box>
	);
}
