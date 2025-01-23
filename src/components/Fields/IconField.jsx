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
	const isValuePresent = val !== "";
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
			sx={(theme) => ({
				"& .MuiOutlinedInput-notchedOutline": {
					px: 5.5,
				},
			})}
			label={Label}
			slotProps={{
				inputLabel: {
					shrink: isFocused || isValuePresent,

					sx: {
						ml: "35px",
					},
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
			// focused={false}
			onChange={onChange}
			variant="outlined"
			placeholder={Placeholder}
			name={Name}
			value={val}
			onFocus={handleFocus}
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
