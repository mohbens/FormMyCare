import { Box } from "@mui/material";
import React from "react";

export default function MyBox({ Icon, Text }) {
	return (
		<Box sx={{ display: "flex", justifyItems: "center" }}>
			{Icon}
			{Text}
		</Box>
	);
}
