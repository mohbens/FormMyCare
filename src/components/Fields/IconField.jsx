import { InputAdornment, TextField } from "@mui/material";
import React from "react";

export default function IconField(props) {
	const {
		Label,
		Placeholder,
		Name,
		val,
		Start,
		End,
		error,
		helperText,
		onChange,
		// onFocus,
	} = props;
	// console.log(error, helperText);
	return (
		<TextField
			onChange={onChange}
			variant="outlined"
			label={Label}
			placeholder={Placeholder}
			name={Name}
			value={val}
			// onFocus={onFocus}
			InputProps={{
				startAdornment: Start && (
					<InputAdornment position="start">{Start}</InputAdornment>
				),
				endAdornment: End && (
					<InputAdornment position="end">{End}</InputAdornment>
				),
			}}
			fullWidth
			error={error}
			helperText={helperText}
		/>
	);
}
