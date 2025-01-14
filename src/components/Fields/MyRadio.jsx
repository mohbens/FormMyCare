import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function MyRadio({ Options, Label }) {
	return (
		<RadioGroup
			sx={{
				border: "1px solid rgba(0, 0, 0, 0.23)",
				borderRadius: "4px",
				padding: "8px",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
			row
			name="civilité"
			// value={values.civilité}
			// onChange={handleInputChange}
		>
			{Options.map((option) => (
				<FormControlLabel
					value={option.value}
					control={<Radio />}
					label={option.value}
				/>
			))}
		</RadioGroup>
	);
}
