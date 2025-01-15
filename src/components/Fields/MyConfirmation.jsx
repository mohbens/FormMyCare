import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import React from "react";
import { useTranslation } from "react-i18next";
import IconField from "./IconField";

export default function MyConfirmation() {
	const { t } = useTranslation();
	return (
		<IconField
			Label={t("confirmation") + " *"}
			Placeholder={t("confirmation") + " *"}
			name="confirmation"
			Start={<AlternateEmailIcon />}
		/>
	);
}
