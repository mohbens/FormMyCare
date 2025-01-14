import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function MySelect({ Options, Label }) {
	return (
		<FormControl fullWidth>
			<InputLabel id="my-select-label">{Label}</InputLabel>
			<Select
				labelId="my-select-label"
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
