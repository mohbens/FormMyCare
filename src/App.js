import logo from "./logo.svg";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Forgot from "./pages/Forgot.jsx";
import Test from "./data/test.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#e53935",
		},
		secondary: {
			main: "#ff1744",
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
			{/* <Register />; */}
			{/* <Login /> */}
			{/* <Forgot /> */}
			<RouterProvider router={route}></RouterProvider>
		</ThemeProvider>
	);
}

export default App;
