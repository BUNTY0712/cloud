import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import MobFundWallet from '../Mobile/MobFundWallet';
import DesktopFundWallet from '../Desktop/DesktopFundWallet';
import MobAddFund from '../Mobile/MobAddFund';
import DesktopAddFund from '../Desktop/DesktopAddFund';
import DesktopDashboard from '../Desktop/DesktopDashboard';
import MobDashboard from '../Mobile/MobDashboard';
import MobChangePassword from '../Mobile/MobChangePassword';
import DesktopChangePassword from '../Desktop/DesktopChangePassword';

const ChangePassword = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobChangePassword /> : <DesktopChangePassword />}</>;
};

export default ChangePassword;
