import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";

export default function Reinitialiser() {
	return (
		<Box>
			<TextField
				label="Email *"
				placeholder="Email"
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
				Réinitialiser
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
					S'identifier
				</Link>
				<Link
					to="/register"
					style={{
						marginTop: "20px",
						color: "red",
						marginBottom: "0px",
						textDecoration: "none",
					}}>
					Pas encore membre?
				</Link>
			</Box>
		</Box>
	);
}
