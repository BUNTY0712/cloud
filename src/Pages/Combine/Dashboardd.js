import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import MobFundWallet from '../Mobile/MobFundWallet';
import DesktopFundWallet from '../Desktop/DesktopFundWallet';
import MobAddFund from '../Mobile/MobAddFund';
import DesktopAddFund from '../Desktop/DesktopAddFund';
import DesktopDashboard from '../Desktop/DesktopDashboard';
import MobDashboard from '../Mobile/MobDashboard';

const Dashboardd = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobDashboard /> : <DesktopDashboard />}</>;
};

export default Dashboardd;
