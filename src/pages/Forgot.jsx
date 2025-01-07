import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import PasswordIcon from "@mui/icons-material/Password";
import Reinitialiser from "../components/Reinitialiser";

export default function Forgot() {
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
						elevation={10}
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
							<PasswordIcon sx={{ width: "50px", height: "50px", mr: "8px" }} />
							<Typography
								variant="h5"
								sx={{ color: "black", fontWeight: "bold" }}>
								Bienvenue sur <span style={{ color: "red" }}>MyCareFlex</span>
								<Typography variant="h6" style={{ fontSize: "0.875rem" }}>
									Demander un nouveau mot de passe
								</Typography>
							</Typography>
						</div>
						<hr
							style={{
								width: "100%",
								marginTop: "16px",
								marginBottom: "15px",
								// borderColor: "rgba(0, 0, 0, 0.12);",
							}}></hr>
						<Reinitialiser />
					</Card>
				</Grid>
			</div>
			;
		</div>
	);
}
