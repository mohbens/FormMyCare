import React, { useState } from "react";
import IconField from "./IconField";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

// import { useTranslation } from "react-i18next";

export default function MyPhone({
	Value,
	Label,
	PlaceHolder,
	Name,
	isMobile,
	Error,
	HelperText,
	Prefix,
}) {
	console.log("prefix", Prefix);
	// const { t } = useTranslation();
	const [phoneValue, setPhoneValue] = useState(Value || "");

	if (isMobile) {
		var Icon = <SmartphoneIcon />;
	} else {
		Icon = <PhoneIcon />;
	}
	const [err, setErr] = useState(Error);
	const [helperTxt, setHelperTxt] = useState(HelperText);

	const handleChange = (event) => {
		const inputValue = event.target.value;

		if (/^\+33\d*$/.test(inputValue) && inputValue.length <= 13) {
			setPhoneValue(inputValue);
		}
		if (inputValue.length >= 13) {
			setErr(false);
			setHelperTxt("");
		} else {
			setErr(true);
			setHelperTxt("Must be 10 digits ");
		}
	};

	const handleFocus = () => {
		if (!phoneValue) {
			setPhoneValue(Prefix);
		}
	};

	const handleBlur = () => {
		console.log("Blur");
		if (phoneValue === Prefix) {
			setPhoneValue("");
		}
	};

	return (
		<IconField
			Label={Label}
			Placeholder={PlaceHolder}
			Name={Name}
			val={phoneValue}
			Start={Icon}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
			error={err}
			helperText={helperTxt}
		/>
	);
}
