import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import React from "react";
import { useTranslation } from "react-i18next";
import IconField from "./IconField";

export default function MyEmail({ Value, Error, HelperText }) {
	const { t } = useTranslation();
	return (
		<IconField
			Label={t("email") + " *"}
			Placeholder={t("email") + " *"}
			Name={t("email")}
			val={Value}
			Start={<AlternateEmailIcon />}
			error={Error}
			helperText={HelperText}
		/>
	);
}
