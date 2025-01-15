import { InputAdornment, TextField } from "@mui/material";
import React from "react";

export default function IconField(props) {
	console.log(props.Start);
	const { Start, End, Label, placeholder, name } = props;

	return (
		<TextField
			variant="outlined"
			label={Label}
			placeholder={placeholder}
			name={name}
			InputProps={{
				startAdornment: Start && (
					<InputAdornment position="start">{Start}</InputAdornment>
				),
				endAdornment: End && (
					<InputAdornment position="end">{End}</InputAdornment>
				),
			}}
			fullWidth
		/>
	);
}
