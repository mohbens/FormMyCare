import MySelect from "../components/Fields/MySelect";
import MyRadio from "../components/Fields/MyRadio";
import MyEmail from "../components/Fields/MyEmail";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import IconField from "../components/Fields/IconField";
import MyPswrd from "../components/Fields/MyPswrd";
import MyPhone from "../components/Fields/MyPhone";
import MyMobile from "../components/Fields/MyMobile";
import { Box, Card, Grid, TextField, Typography } from "@mui/material";
import Language from "../components/Language";

const Test = () => {
	const SelectOptions = [
		{
			label: "Option1 ",
			value: "Option1",
		},
		{
			label: "Option2 ",
			value: "Option2",
		},
		{
			label: "Option3 ",
			value: "Option3",
		},
	];
	const RadioOptions = ["Mr", "Mrs"];
	return (
		// <div>
		// 	{/* <MySelect Options={SelectOptions} Label="MySelect" />
		// 	<MyRadio Options={SelectOptions} Label="MySelect" />
		// 	<MyEmail />
		// 	<MyPswrd />
		// 	<MyPhone />
		// 	<MyMobile />
		// 	<IconField
		// 		label="Email"
		// 		placeholder="Email"
		// 		name="Email"
		// 		Start={<AlternateEmailIcon />}
		// 		// End={<VpnKeyIcon />}
		// 	/> */}

		// 	<TextField id="outlined-basic" label="Outlined" variant="outlined" />
		// </div>

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
								{/* {icon} */}
								<Typography
									variant="h5"
									sx={{ color: "black", fontWeight: "bold" }}>
									{/* {t("titleB")} */}
									<span style={{ color: "red" }}>MyCareFlex</span>
									<Typography variant="h6" style={{ fontSize: "0.875rem" }}>
										{/* {t(pageTitle)} */}
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

						{/* {children} */}
						<TextField
							slotProps={{
								inputLabel: {
									// shrink: isFocused,
									// margin: "dense",
									sx: { ml: "35px" },

									"&css-1ll44ll-MuiOutlinedInput-notchedOutline": {
										ml: "35px",
									},
								},
							}}
							// focused={true}
							fullWidth
							id="outlined-basic"
							label="Outlined"
							placeholder="Outlined"
							variant="outlined"
						/>
					</Card>
				</Grid>
			</div>
		</div>
	);
};

export default Test;
