import React from "react";
import {
	TextField,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";

export default function InputField(props) {
	const {
		typeInput,
		InputLabel: label,
		Options,
		// value,
		//  onChange
	} = props;
	let menuItems = "";
	if (props.typeInput === "Select") {
		menuItems = Options.map((option) => (
			<MenuItem key={option} value={option}>
				{option}
			</MenuItem>
		));
	} else if (props.typeInput === "Radio") {
		menuItems = Options.map((option) => (
			<FormControlLabel value={option} control={<Radio />} label={option} />
		));
	}

	console.log(Options);

	if (typeInput === "Select") {
		return (
			<FormControl variant="outlined" fullWidth>
				<InputLabel id="select-label">{label}</InputLabel>
				<Select label={label} fullWidth>
					{menuItems}
				</Select>
			</FormControl>
		);
	} else if (typeInput === "TextField") {
		return <TextField variant="outlined" label={label} fullWidth />;
	} else if (typeInput === "Radio") {
		return (
			<FormControl>
				<FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					// defaultValue="female"
					name="radio-buttons-group">
					{menuItems}
				</RadioGroup>
			</FormControl>
		);
	}
}
