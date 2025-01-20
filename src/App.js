import "./App.css";
import { ThemeProvider } from "@mui/material";
import Register from "./pages/register.jsx";
import Login from "./pages/Login.jsx";
import Forgot from "./pages/Forgot.jsx";
import Test from "./data/test.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#e53935",
		},
		secondary: {
			main: "#ff1744",
		},
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "blue",
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				outlined: {
					color: "gray",
					"&.Mui-focused": {
						color: "blue",
					},
				},
			},
		},
	},
});

function App() {
	const route = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/forgot-password",
			element: <Forgot />,
		},
		{
			path: "/Test",
			element: <Test />,
		},
	]);

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={route}></RouterProvider>
		</ThemeProvider>
	);
}

export default App;
