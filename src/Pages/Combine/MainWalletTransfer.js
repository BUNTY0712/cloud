import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import DesktopWalletAddress from '../Desktop/DesktopWalletAddress';
import MobileWalletAddress from '../Mobile/MobileWalletAddress';
import MobileMyActivation from '../Mobile/MobileMyActivation';
import DesktopMyActivation from '../Desktop/DesktopMyActivation';
import MobileMainWallet from '../Mobile/MobileMainWallet';
import DesktopMainWallet from '../Desktop/DesktopMainWallet';
import MobMainWalletTransfer from '../Mobile/MobMainWalletTransfer';
import DesktopMainWalletTransfer from '../Desktop/DesktopMainWalletTransfer';

const MainWalletTransfer = () => {
	const small = useMediaQuery('(max-width:600px)');
	return (
		<>{small ? <MobMainWalletTransfer /> : <DesktopMainWalletTransfer />}</>
	);
};

export default MainWalletTransfer;
