import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		background: {
			primary: "#fafafa",
			paper: "#fafafa",
			container: "#f2f2f2",
			default: "#f2f2f2",
		},
		text: {
			primary: "#11111",
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			primary: "#2a2b2a",
			paper: "#2a2b2a",
			container: "#222",
			default: "#222",
		},
		text: {
			primary: "#fff",
		},
	},
});
