import React from "react";

import "../utils/i18n";
import { useTranslation } from "react-i18next";
import flagGb from "../assets/united-kingdom-flag-icon.svg";
import flagFr from "../assets/france-flag-icon.svg";
import { FormControl, MenuItem, Select } from "@mui/material";
export default function Language() {
	const { t, i18n } = useTranslation();

	const handleLanguageChange = (event) => {
		i18n.changeLanguage(event.target.value);
	};

	const renderValue = (value) => {
		if (value === "fr") {
			return (
				<img
					src={flagFr}
					width="15px"
					style={{ padding: "0px" }}
					alt="French Flag"
				/>
			);
		} else if (value === "en") {
			return (
				<img
					style={{ padding: "0px" }}
					src={flagGb}
					width="15px"
					alt="English Flag"
				/>
			);
		}
		return null;
	};
	return (
		<FormControl
			fullWidth
			variant="outlined"
			sx={{ height: "40px", width: "40px", mb: 2 }}>
			<Select
				sx={{
					marginTop: "-15px",
					marginLeft: "10px",
					maxHeight: "40px",
					maxWidth: "46px",
					alignItems: "center",
					position: "absolute",
				}}
				labelId="languageSelect"
				value={i18n.language}
				onChange={handleLanguageChange}
				renderValue={renderValue}
				IconComponent={() => null}>
				<MenuItem sx={{ height: "35px", alignItems: "center" }} value="fr">
					<img
						style={{ marginRight: "5px" }}
						src={flagFr}
						width="15px"
						alt="French Flag"
					/>
					<p>{t("french")}</p>
				</MenuItem>
				<MenuItem sx={{ height: "35px", alignItems: "center" }} value="en">
					<img
						style={{ marginRight: "5px" }}
						src={flagGb}
						width="15px"
						alt="English Flag"
					/>
					<p> {t("english")}</p>
				</MenuItem>
			</Select>
		</FormControl>
	);
}
