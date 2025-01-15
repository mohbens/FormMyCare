import React from "react";
import IconField from "./IconField";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";

export default function MyPhone() {
	const { t } = useTranslation();
	return (
		<IconField
			Label={t("phone")}
			Placeholder={t("phone")}
			name={t("phone")}
			Start={<PhoneIcon />}
		/>
	);
}
