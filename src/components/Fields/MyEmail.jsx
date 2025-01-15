import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import React from "react";
import { useTranslation } from "react-i18next";
import IconField from "./IconField";

export default function MyEmail() {
	const { t } = useTranslation();
	return (
		<IconField
			Label={t("email") + " *"}
			Placeholder={t("email") + " *"}
			name={t("email")}
			Start={<AlternateEmailIcon />}
		/>
	);
}
