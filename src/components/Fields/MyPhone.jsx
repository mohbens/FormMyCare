// import React from "react";
// import IconField from "./IconField";
// import PhoneIcon from "@mui/icons-material/Phone";
// import SmartphoneIcon from "@mui/icons-material/Smartphone";

// import { useTranslation } from "react-i18next";

// export default function MyPhone({
// 	Value,
// 	Label,
// 	PlaceHolder,
// 	Name,
// 	isMobile,
// 	Icon,
// }) {
// 	const { t } = useTranslation();
// 	if (isMobile) {
// 		Icon = <SmartphoneIcon />;
// 	} else {
// 		Icon = <PhoneIcon />;
// 	}

// 	return (
// 		<IconField
// 			Label={Label}
// 			Placeholder={PlaceHolder}
// 			name={Name}
// 			Start={Icon}
// 			value={Value}
// 		/>
// 	);
// }
import React, { useState } from "react";
import IconField from "./IconField";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

import { useTranslation } from "react-i18next";

export default function MyPhone({ Value, Label, PlaceHolder, Name, isMobile }) {
	const { t } = useTranslation();
	const [phoneValue, setPhoneValue] = useState(Value || "");

	if (isMobile) {
		var Icon = <SmartphoneIcon />;
	} else {
		var Icon = <PhoneIcon />;
	}

	const handleChange = (event) => {
		const inputValue = event.target.value;

		if (/^\+33\d*$/.test(inputValue) && inputValue.length <= 13) {
			setPhoneValue(inputValue);
		}
	};
	const handleFocus = () => {
		if (!phoneValue) {
			setPhoneValue("+33");
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
		/>
	);
}
