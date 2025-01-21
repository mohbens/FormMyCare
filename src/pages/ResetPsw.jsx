import React, { useState } from "react";
import PasswordIcon from "@mui/icons-material/Password";
import PublicPage from "../components/PublicPage";
import GppBadIcon from "@mui/icons-material/GppBad";
import GppGoodIcon from "@mui/icons-material/GppGood";
import "../utils/i18n";
import { useTranslation } from "react-i18next";
import { Box, Button, Paper } from "@mui/material";
import MyPswrd from "../components/Fields/MyPswrd";
import MyConfirmation from "../components/Fields/MyConfirmation";
import MyBox from "../components/Fields/MyBox";

export default function ResetPsw() {
	const { t } = useTranslation();
	const [password, setPassword] = useState("");
	const [confirmation, setConfirmation] = useState("");
	const [conf, setConf] = useState(false);
	const isError = (e) => {
		if (e) return <GppBadIcon sx={{ color: "red" }} />;
		else return <GppGoodIcon sx={{ color: "green" }} />;
	};
	const handleChange = (e) => {
		const value = e.target.value;
		setPassword(value);
		if (value === confirmation) {
			setConf(false);
		} else {
			setConf(true);
		}
	};

	const handleConf = (e) => {
		const value = e.target.value;
		setConfirmation(value);
		if (value === password) {
			setConf(false);
		} else {
			setConf(true);
		}
	};
	////////////////////////////Regex/////////////////////
	const Req12 = /^.{12,}$/;
	const ReqUprCase = /(?=.*[A-Z])/;
	const ReqLwrCase = /(?=.*[a-z])/;
	const ReqDigit = /(?=.*\d)/;
	const ReqSpecial = /(?=.*[!@#$%^&*(),.?":{}|<>])/;

	return (
		<PublicPage
			icon={<PasswordIcon sx={{ width: "50px", height: "50px", mr: "8px" }} />}
			pageTitle="titlePReset">
			<p>{t("TextRstPsw")}</p>
			<Paper
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					mb: "16px",
				}}
				// elevation={1}
			>
				<Box
					sx={{
						mt: "16px",
						mb: "16px",
						p: "16px",
						display: "flex",
						flexDirection: "column",
						//
						gap: "8px",
					}}>
					<MyBox
						Icon={isError(!Req12.test(password))}
						Text={t("Req12")}></MyBox>
					<MyBox
						Icon={isError(!ReqUprCase.test(password))}
						Text={t("ReqUprCase")}></MyBox>
					<MyBox
						Icon={isError(!ReqLwrCase.test(password))}
						Text={t("ReqLwrCase")}></MyBox>
					<MyBox
						Icon={isError(!ReqDigit.test(password))}
						Text={t("ReqDigit")}></MyBox>
					<MyBox
						Icon={isError(!ReqSpecial.test(password))}
						Text={t("ReqSpetial")}></MyBox>
					<MyBox Icon={isError(conf)} Text={t("ReqMatchPsw")}></MyBox>
				</Box>
			</Paper>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
				<MyPswrd OnChange={handleChange} Value={password} />
				<MyConfirmation OnChange={handleConf} />
				<Button
					type="submit"
					sx={{ mb: "25px", height: "42px", width: "100%" }}
					// color="primary"
					variant="contained">
					{t("ResetBtn")}
				</Button>
			</Box>
		</PublicPage>
	);
}
