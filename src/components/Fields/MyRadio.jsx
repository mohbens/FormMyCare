import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function MyRadio({ Options, Label, Default, isDisabled }) {
	return (
		<RadioGroup
			disabled={isDisabled}
			label="aaa"
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
			// value={values.civilité}
			// onChange={handleInputChange}
		>
			{Options.map((option) => (
				<FormControlLabel
					key={option.value}
					value={option.value}
					control={<Radio disabled={isDisabled} />}
					label={option.value}
				/>
			))}
		</RadioGroup>
	);
}
