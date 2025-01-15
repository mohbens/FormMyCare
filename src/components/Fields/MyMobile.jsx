import React from "react";
import IconField from "./IconField";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { useTranslation } from "react-i18next";
export default function MyMobile() {
	const { t } = useTranslation();

	return (
		<IconField
			Label={t("mobile") + "*"}
			Placeholder={t("mobile") + "*"}
			name={t("mobile")}
			Start={<SmartphoneIcon />}
		/>
	);
}
