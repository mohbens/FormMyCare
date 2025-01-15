import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	OnChange,
} from "@mui/material";
import React from "react";

export default function MySelect({
	Options,
	Label,
	Default,
	isDisabled,
	isRequired,
	OnChange,
	Value,
	Error,
	HelperText,
}) {
	return (
		<FormControl fullWidth>
			<InputLabel id="my-select-label">{Label}</InputLabel>
			<Select
				required={isRequired}
				disabled={isDisabled}
				label={Label}
				labelId="my-select-label"
				defaultValue={Default}
				value={Value}
				onChange={OnChange}
				placeholder="Select an option">
				{Options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
