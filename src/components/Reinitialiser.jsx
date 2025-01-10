import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";
import i18n from "../utils/i18n";
import { useTranslation } from "react-i18next";

export default function Reinitialiser() {
	const { t } = useTranslation();
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
			<Button
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
