import React from "react";
import IconField from "./IconField";
import PhoneIcon from "@mui/icons-material/Phone";

export default function MyEmail() {
	return (
		<IconField
			Label="Phone"
			Placeholder="Phone"
			name="Phone"
			Start={<PhoneIcon />}
		/>
	);
}
