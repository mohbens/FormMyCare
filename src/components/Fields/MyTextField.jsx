import { TextField } from "@mui/material";
import React from "react";

export default function MyTextField({
	Variant,
	Label,
	Placeholder,
	Name,
	Value,
	OnChange,
	isDisabled,
	Error,
	HelperText,
}) {
	return (
		<TextField
			slotProps={{
				style: { fontWeight: 600 },
			}}
			variant={Variant}
			label={Label}
			placeholder={Placeholder}
			name={Name}
			value={Value}
			onChange={OnChange}
			fullWidth
			disabled={isDisabled}
			error={Error}
			helperText={HelperText}
		/>
	);
}
