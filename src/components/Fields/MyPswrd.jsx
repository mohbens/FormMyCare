import React, { useState } from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import IconField from "./IconField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function MyPswrd() {
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const [showPassword, setShowPassword] = useState(false);
	const { t } = useTranslation();

	return (
		<FormControl sx={{ width: "100%" }} variant="outlined">
			<InputLabel htmlFor="outlined-adornment-password">
				{t("psw") + "*"}
			</InputLabel>
			<OutlinedInput
				label="Password"
				placeholder="Password"
				name="Password"
				// label={t("psw") + "*"}
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
		</FormControl>
	);
}
