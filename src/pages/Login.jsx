import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import Form from "../components/Form";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Identification from "../components/Identification";
export default function Login() {
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
						<div
							style={{
								display: "flex",

								alignItems: "center",
							}}>
							<LockOpenIcon sx={{ width: "50px", height: "50px", mr: "8px" }} />
							<Typography
								variant="h5"
								sx={{ color: "black", fontWeight: "bold" }}>
								Bienvenue sur <span style={{ color: "red" }}>MyCareFlex</span>
								<Typography variant="h6" style={{ fontSize: "0.875rem" }}>
									Veuillez vous identifier
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
						<Identification />
					</Card>
				</Grid>
			</div>
			;
		</div>
	);
}
