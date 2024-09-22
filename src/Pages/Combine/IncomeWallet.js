import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import DesktopWalletAddress from '../Desktop/DesktopWalletAddress';
import MobileWalletAddress from '../Mobile/MobileWalletAddress';
import MobileMyActivation from '../Mobile/MobileMyActivation';
import DesktopMyActivation from '../Desktop/DesktopMyActivation';
import MobileMainWallet from '../Mobile/MobileMainWallet';
import DesktopMainWallet from '../Desktop/DesktopMainWallet';
import MobNewActivation from '../Mobile/MobNewActivation';
import DesktopNewActivation from '../Desktop/DesktopNewActivation';
import MobIncomeWallet from '../Mobile/MobIncomeWallet';
import DesktopIncomeWallet from '../Desktop/DesktopIncomeWallet';

const IncomeWallet = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobIncomeWallet /> : <DesktopIncomeWallet />}</>;
};

export default IncomeWallet;
