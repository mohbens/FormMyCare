import {
	Box,
	Card,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Identification from "../components/Identification";
import "../utils/i18n";
import Language from "../components/Language.jsx";
import { useTranslation } from "react-i18next";
import PaperForm from "../components/PaperForm.jsx";
export default function Login() {
	const { t } = useTranslation();
	return (
		<div>
			<PaperForm typeForm="login" />
		</div>
		// <div
		// 	style={{
		// 		backgroundColor: "rgb(229, 57, 53)",
		// 		height: "100vh",
		// 		display: "flex",
		// 		justifyContent: "center",
		// 		alignItems: "center",
		// 		position: "relative",
		// 	}}>
		// 	<div>
		// 		<Grid
		// 			container
		// 			direction="column"
		// 			justifyContent="center"
		// 			alignItems="center"
		// 			style={{ minHeight: "100vh", position: "relative" }}>
		// 			<Card
		// 				elevation={5}
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
		// 						<LockOpenIcon
		// 							sx={{ width: "50px", height: "50px", mr: "8px" }}
		// 						/>
		// 						<Typography
		// 							variant="h5"
		// 							sx={{ color: "black", fontWeight: "bold" }}>
		// 							{t("titleB")}
		// 							<span style={{ color: "red" }}>{t("titleR")}</span>
		// 							<Typography variant="h6" style={{ fontSize: "0.875rem" }}>
		// 								{t("titlePLogin")}
		// 							</Typography>
		// 						</Typography>
		// 					</div>
		// 					{/* ///////////////Language///////////// */}
		// 					<Language />
		// 					{/* //////////////////////////// */}
		// 				</Box>

		// 				<hr
		// 					style={{
		// 						width: "100%",
		// 						marginTop: "16px",
		// 						marginBottom: "15px",
		// 						// borderColor: "rgba(0, 0, 0, 0.12);",
		// 					}}></hr>
		// 				<Identification />
		// 				{/* <Test /> */}
		// 			</Card>
		// 		</Grid>
		// 	</div>
		// </div>
	);
}
