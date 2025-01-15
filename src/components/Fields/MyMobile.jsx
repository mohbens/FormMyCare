import React from "react";
import IconField from "./IconField";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { useTranslation } from "react-i18next";
export default function MyMobile({
	Value,
	OnChange,
	Error,
	HelperText,
	isRequired,
}) {
	const { t } = useTranslation();

	return (
		<IconField
			Label={t("mobile") + "*"}
			Placeholder={t("mobile") + "*"}
			name={t("mobile")}
			Start={<SmartphoneIcon />}
			value={Value}
			onChange={OnChange}
			error={Error}
			helperText={HelperText}
		/>
	);
}
