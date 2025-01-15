import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function MySelect({ Options, Label, Default, isDisabled }) {
	return (
		<FormControl fullWidth>
			<InputLabel id="my-select-label">{Label}</InputLabel>
			<Select
				disabled={isDisabled}
				label={Label}
				labelId="my-select-label"
				defaultValue={Default}
				// value={selectedValue}
				// onChange={handleChange}
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
