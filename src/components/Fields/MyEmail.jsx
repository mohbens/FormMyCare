import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import React from "react";
import { useTranslation } from "react-i18next";
import IconField from "./IconField";

export default function MyEmail() {
	return (
		<IconField
			Label="Email"
			Placeholder="Email"
			name="Email"
			Start={<AlternateEmailIcon />}
		/>
	);
}
