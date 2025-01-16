import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function MyRadio({
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
		<RadioGroup
			required={isRequired}
			disabled={isDisabled}
			label="aaa"
			error={Error}
			helperText={HelperText}
			sx={{
				border: "1px solid rgba(0, 0, 0, 0.23)",
				borderRadius: "4px",
				padding: "8px",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
			row
			name={Label}
			defaultValue={Default}
			value={Value}
			onChange={OnChange}>
			{Options.map((option) => (
				<FormControlLabel
					key={option.value}
					value={option.value}
					control={<Radio disabled={isDisabled} />}
					label={option.label}
				/>
			))}
		</RadioGroup>
	);
}
