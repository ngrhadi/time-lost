import { useState } from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
import Containers from "./layout/Containers";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { lightTheme, darkTheme } from "./helper/themes";
import { toggleTheme } from "./store/themeSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Typography, Box, Grid } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.primary,
}));

export const BackgroundBase = styled(Container)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	...theme.typography.body2,
	zIndex: -1,
	position: "absolute",
	top: 0,
	left: 0,
	height: "100%",
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.primary,
}));

function App() {
	const theme = useSelector((state) => state.theme);

	// initialize dispatch variable
	const dispatch = useDispatch();

	// ToggleSwitch component
	const ToggleSwitch = () => {
		return (
			<div
				style={{
					position: "fixed",
					top: "10px",
					right: "10px",
				}}>
				<FormGroup
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "center",
					}}>
					<FormControlLabel
						label={
							theme.darkTheme ? (
								<div
									style={{
										position: "relative",
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										marginTop: "-1px",
									}}>
									<DarkModeIcon />
								</div>
							) : (
								<div
									style={{
										position: "relative",
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										marginTop: "-1px",
									}}>
									<LightModeIcon />
								</div>
							)
						}
						control={
							<Switch
								aria-label="Dark Mode"
								aria-labelledby="dark-mode-switch"
								aria-describedby="dark-mode-description"
								checked={theme.darkTheme}
								onChange={() => dispatch(toggleTheme())}></Switch>
						}
					/>
				</FormGroup>
			</div>
		);
	};
	return (
		<div>
			<ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
				<Card
					style={{
						minHeight: "60px",
						borderRadius: "0",
						display: "flex",
						flexDirection: "column",
						// alignItems: "center",
						justifyContent: "center",
						marginBottom: "15px",
					}}>
					<Typography
						variant="h6"
						align="left"
						sx={{
							fontWeight: "bold",
							// color: theme.palette.text.primary,
							marginLeft: "10px",
						}}>
						TIME LOST
					</Typography>
					<ToggleSwitch />
				</Card>
				<BackgroundBase>
					<Box sx={{ flexGrow: 1, marginTop: "60px" }}>
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
					<Paper style={{ marginTop: "15px" }}>
						<Typography variant="h5">This is a sheet of paper.</Typography>
					</Paper>
				</BackgroundBase>
			</ThemeProvider>
		</div>
	);
}

export default App;
