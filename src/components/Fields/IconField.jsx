import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

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
		onFocus,
		onBlur,
		Oncopy,
		Onpaste,
		OnCut,
	} = props;
	// console.log(error, helperText);
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
		if (typeof onFocus === "function") {
			onFocus();
		}
	};
	const handleBlur = () => {
		setIsFocused(false);
		if (typeof onBlur === "function") {
			onBlur();
		}
	};

	return (
		<TextField
			slotProps={{
				inputLabel: {
					shrink: isFocused,
				},
				input: {
					startAdornment: Start && (
						<InputAdornment position="start">{Start}</InputAdornment>
					),
					endAdornment: End && (
						<InputAdornment position="end">{End}</InputAdornment>
					),
				},
			}}
			focused={false}
			// shrink={true}
			// size={"normal"}
			onChange={onChange}
			variant="outlined"
			label={Label}
			placeholder={Placeholder}
			name={Name}
			value={val}
			onFocus={handleFocus}
			// InputProps={{
			// 	startAdornment: Start && (
			// 		<InputAdornment position="start">{Start}</InputAdornment>
			// 	),
			// 	endAdornment: End && (
			// 		<InputAdornment position="end">{End}</InputAdornment>
			// 	),
			// }}
			fullWidth
			error={error}
			helperText={helperText}
			onBlur={handleBlur}
			onCopy={Oncopy}
			onPaste={Onpaste}
			onCut={OnCut}
			// autocomplete={Autocomplete}
		/>
	);
}
