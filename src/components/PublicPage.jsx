import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Language from "./Language";
import "../utils/i18n";
import { useTranslation } from "react-i18next";

export default function PublicPage(props) {
	const { t } = useTranslation();

	const { pageTitle, icon, children } = props;

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
								{icon}
								<Typography
									variant="h5"
									sx={{ color: "black", fontWeight: "bold" }}>
									{t("titleB")}
									<span style={{ color: "red" }}>MyCareFlex</span>
									<Typography variant="h6" style={{ fontSize: "0.875rem" }}>
										{t(pageTitle)}
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
							}}></hr>

						{children}
					</Card>
				</Grid>
			</div>
		</div>
	);
}
