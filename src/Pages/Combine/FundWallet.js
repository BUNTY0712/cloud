import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import MobFundWallet from '../Mobile/MobFundWallet';
import DesktopFundWallet from '../Desktop/DesktopFundWallet';

const FundWallet = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobFundWallet /> : <DesktopFundWallet />}</>;
};

export default FundWallet;
