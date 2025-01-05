import React from "react";
import { Card, Grid, Container, Typography, Paper } from "@mui/material";
import "../styles/register.css";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Form from "../components/Form";

export default function Register() {
	return (
		<div
			style={{
				backgroundColor: "rgb(229, 57, 53)",
				height: "100vh",
				width: "100%",
				margin: "auto",
			}}>
			<div>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					style={{ minHeight: "100vh" }}>
					<Card
						sx={{
							padding: "16px",
							borderRadius: "4px",
							height: "auto",
							margin: "0 auto ",
							width: "520px",
						}}>
						<div
							style={{
								display: "flex",

								alignItems: "center",
							}}>
							<PersonAddAlt1Icon
								sx={{ width: "50px", height: "50px", mr: "8px" }}
							/>
							<Typography
								variant="h5"
								sx={{ color: "black", fontWeight: "bold" }}>
								Bienvenue sur <span style={{ color: "red" }}>MyCareFlex</span>
								<Typography variant="h6" style={{ fontSize: "0.875rem" }}>
									Créer votre compte
								</Typography>
							</Typography>
						</div>
						<hr
							style={{
								width: "100%",
								// borderColor: "rgba(0, 0, 0, 0.12);",
							}}></hr>

						<Form />
					</Card>
				</Grid>
			</div>
			;
		</div>
	);
}
