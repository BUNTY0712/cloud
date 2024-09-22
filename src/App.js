import { Box, Grid } from '@mui/material';
import React from 'react';
import MainRouter from './MainRouter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import store, { persistor } from './Store';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MainRouter />
			</PersistGate>
		</Provider>
	);
};

export default App;
