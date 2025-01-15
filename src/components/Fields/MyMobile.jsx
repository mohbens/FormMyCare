import React from "react";
import IconField from "./IconField";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
export default function MyEmail() {
	return (
		<IconField
			Label="Mobile"
			Placeholder="Mobile"
			name="Mobile"
			Start={<SmartphoneIcon />}
		/>
	);
}
