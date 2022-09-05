import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";

import darkTheme from './theme';
import {
	ThemeProvider,
	CssBaseline,
	useTheme
  } from '@mui/material'

import './App.css'



function App() {
	const theme = useTheme();

	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
					<Routing />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
