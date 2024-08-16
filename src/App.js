import { Box, Grid } from '@mui/material';
import React from 'react';
import MainRouter from './MainRouter';
import { Provider } from 'react-redux';
import store from './Store';
import './App.css';

const App = () => {
	return (
		<>
			<Provider store={store}>
				<MainRouter />
			</Provider>
		</>
	);
};

export default App;
