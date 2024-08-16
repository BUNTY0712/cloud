import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import DesktopWalletAddress from '../Desktop/DesktopWalletAddress';
import MobileWalletAddress from '../Mobile/MobileWalletAddress';
import MobileMyActivation from '../Mobile/MobileMyActivation';
import DesktopMyActivation from '../Desktop/DesktopMyActivation';
import MobileMainWallet from '../Mobile/MobileMainWallet';
import DesktopMainWallet from '../Desktop/DesktopMainWallet';

const MainWallet = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobileMainWallet /> : <DesktopMainWallet />}</>;
};

export default MainWallet;
