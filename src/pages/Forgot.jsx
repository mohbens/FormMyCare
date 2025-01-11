import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import PasswordIcon from "@mui/icons-material/Password";
import Reinitialiser from "../components/Reinitialiser";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import Language from "../components/Language.jsx";
import PaperForm from "../components/PaperForm.jsx";

export default function Forgot() {
	const { t } = useTranslation();
	return (
		<div>
			<PaperForm typeForm="Forgot" />
		</div>
		// <div
		// 	style={{
		// 		backgroundColor: "rgb(229, 57, 53)",
		// 		height: "100vh",
		// 		display: "flex",
		// 		justifyContent: "center",
		// 		alignItems: "center",
		// 	}}>
		// 	<div>
		// 		<Grid
		// 			container
		// 			direction="column"
		// 			justifyContent="center"
		// 			alignItems="center"
		// 			style={{ minHeight: "100vh" }}>
		// 			<Card
		// 				elevation={10}
		// 				sx={{
		// 					padding: "16px",
		// 					borderRadius: "4px",
		// 					height: "auto",
		// 					margin: "0 auto ",
		// 					width: "520px",
		// 				}}>
		// 				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
		// 					<div
		// 						style={{
		// 							display: "flex",

		// 							alignItems: "center",
		// 						}}>
		// 						<PasswordIcon
		// 							sx={{ width: "50px", height: "50px", mr: "8px" }}
		// 						/>
		// 						<Typography
		// 							variant="h5"
		// 							sx={{ color: "black", fontWeight: "bold" }}>
		// 							{t("titleB")}
		// 							<span style={{ color: "red" }}>{t("titleR")}</span>
		// 							<Typography variant="h6" style={{ fontSize: "0.875rem" }}>
		// 								{t("titlePForgot")}
		// 							</Typography>
		// 						</Typography>
		// 					</div>
		// 					<Language />
		// 				</Box>
		// 				<hr
		// 					style={{
		// 						width: "100%",
		// 						marginTop: "16px",
		// 						marginBottom: "15px",
		// 						// borderColor: "rgba(0, 0, 0, 0.12);",
		// 					}}></hr>
		// 				<Reinitialiser />
		// 			</Card>
		// 		</Grid>
		// 	</div>

		// </div>
	);
}
