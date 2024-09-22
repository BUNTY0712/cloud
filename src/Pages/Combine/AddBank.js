import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import MobFundWallet from '../Mobile/MobFundWallet';
import DesktopFundWallet from '../Desktop/DesktopFundWallet';
import MobAddFund from '../Mobile/MobAddFund';
import DesktopAddFund from '../Desktop/DesktopAddFund';
import MobAddBank from '../Mobile/MobAddBank';
import DesktopAddBank from '../Desktop/DesktopAddBank';

const AddBank = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobAddBank /> : <DesktopAddBank />}</>;
};

export default AddBank;
