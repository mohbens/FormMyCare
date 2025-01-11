import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Language from "./Language";
import "../utils/i18n";
import { useTranslation } from "react-i18next";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PasswordIcon from "@mui/icons-material/Password";
import Form from "./Form";
import Identification from "./Identification";
import Reinitialiser from "./Reinitialiser";

export default function PaperForm(props) {
	const [title, setTitle] = useState("");
	const { t } = useTranslation();
	const handleForm = (e) => {
		if (e === "register") {
			return <Form />;
		} else if (e === "forgot") {
			return <Reinitialiser />;
		} else if (e === "login") {
			return <Identification />;
		}
	};

	useEffect(() => {
		if (props.typeForm === "register") {
			setTitle(t("titlePRegister"));
		} else if (props.typeForm === "forgot") {
			setTitle(t("titlePForgot"));
		} else if (props.typeForm === "Login") {
			setTitle(t("titlePLogin"));
		}
	}, [props.typeForm, t]);

	const handleIcon = (e) => {
		if (e === "register") {
			return (
				<PersonAddAlt1Icon sx={{ width: "50px", height: "50px", mr: "8px" }} />
			);
		} else if (e === "forgot") {
			return <PasswordIcon sx={{ width: "50px", height: "50px", mr: "8px" }} />;
		} else if (e === "login") {
			return <LockOpenIcon sx={{ width: "50px", height: "50px", mr: "8px" }} />;
		}
	};
	console.log(props.typeForm);
	console.log(handleIcon(props.typeForm));
	return (
		<div
			style={{
				backgroundColor: "rgb(229, 57, 53)",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<div>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					style={{ minHeight: "100vh" }}>
					<Card
						elevation={5}
						sx={{
							padding: "16px",
							borderRadius: "4px",
							height: "auto",
							margin: "0 auto ",
							width: "520px",
						}}>
						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<div
								style={{
									display: "flex",

									alignItems: "center",
								}}>
								{handleIcon(props.typeForm)}
								<Typography
									variant="h5"
									sx={{ color: "black", fontWeight: "bold" }}>
									{t("titleB")}
									<span style={{ color: "red" }}>MyCareFlex</span>
									<Typography variant="h6" style={{ fontSize: "0.875rem" }}>
										{title}
									</Typography>
								</Typography>
							</div>
							<Language />
						</Box>
						<hr
							style={{
								width: "100%",
								marginTop: "16px",
								marginBottom: "15px",
								// borderColor: "rgba(0, 0, 0, 0.12);",
							}}></hr>

						{handleForm(props.typeForm)}
					</Card>
				</Grid>
			</div>
		</div>
	);
}
