import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import MobFundWallet from '../Mobile/MobFundWallet';
import DesktopFundWallet from '../Desktop/DesktopFundWallet';
import MobAddFund from '../Mobile/MobAddFund';
import DesktopAddFund from '../Desktop/DesktopAddFund';

const AddFund = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobAddFund /> : <DesktopAddFund />}</>;
};

export default AddFund;
