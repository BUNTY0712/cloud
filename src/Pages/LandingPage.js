import { useMediaQuery, Box } from '@mui/material';
import React from 'react';
import MobDashboard from './Mobile/MobDashboard';
import Dashboard from './Dashboard';

const LandingPage = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobDashboard /> : <Dashboard />}</>;
};

export default LandingPage;
