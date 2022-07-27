import { Box, Grid, Paper, styled } from "@mui/material";
import React from "react";
import { Item } from "../App";

function Containers() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Item>xs=8</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>xs=8</Item>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Containers;
