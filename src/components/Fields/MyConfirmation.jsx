import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import React from "react";
import { useTranslation } from "react-i18next";
import IconField from "./IconField";

export default function MyConfirmation({ OnChange, Value, Error, HelperText }) {
	const { t } = useTranslation();
	return (
		<IconField
			onChange={OnChange}
			Label={t("confirmation") + " *"}
			Placeholder={t("confirmation") + " *"}
			Name={t("confirmation")}
			val={Value}
			Start={<AlternateEmailIcon />}
			error={Error}
			helperText={HelperText}
		/>
	);
}
