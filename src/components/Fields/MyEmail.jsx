import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import React from "react";
import { useTranslation } from "react-i18next";
import IconField from "./IconField";

export default function MyEmail({ Name, Value, OnChange, Error, HelperText }) {
	const { t } = useTranslation();
	return (
		<IconField
			val={Value}
			onChange={OnChange}
			error={Error}
			helperText={HelperText}
			Label={t("email") + " *"}
			Placeholder={t("email") + " *"}
			Name={Name}
			Start={<AlternateEmailIcon />}
		/>
	);
}
