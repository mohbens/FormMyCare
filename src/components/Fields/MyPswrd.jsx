import React, { useState } from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function MyPswrd({ Name, Value, OnChange, Error, HelperText }) {
	const [showPassword, setShowPassword] = useState(false);
	const { t } = useTranslation();
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<FormControl sx={{ width: "100%" }} variant="outlined">
			<InputLabel htmlFor="outlined-adornment-password">
				{t("psw") + "*"}
			</InputLabel>
			<OutlinedInput
				name={Name}
				value={Value}
				onChange={OnChange}
				error={Error}
				label={t("psw") + "*"}
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
			{Error && (
				<FormHelperText id="password-helper-text" error>
					{HelperText}
				</FormHelperText>
			)}
		</FormControl>
	);
}
