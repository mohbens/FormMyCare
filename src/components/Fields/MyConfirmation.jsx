import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import React from "react";
import { useTranslation } from "react-i18next";
import IconField from "./IconField";

export default function MyConfirmation({
	OnChange,
	Value,
	Error,
	HelperText,
	onPaste,
}) {
	const preventClipboardActions = (e) => {
		e.preventDefault();
	};
	// console.log(onPaste);
	const { t } = useTranslation();
	return (
		<IconField
			onChange={OnChange}
			Label={t("confirmation") + " *"}
			Placeholder={t("confirmation") + " *"}
			Name="confirmation"
			val={Value}
			Start={<AlternateEmailIcon />}
			error={Error}
			helperText={HelperText}
			Type="text"
			Oncopy={preventClipboardActions}
			OnCut={preventClipboardActions}
			Onpaste={preventClipboardActions}
		/>
	);
}
