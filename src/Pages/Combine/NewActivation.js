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

const NewActivation = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobNewActivation /> : <DesktopNewActivation />}</>;
};

export default NewActivation;
