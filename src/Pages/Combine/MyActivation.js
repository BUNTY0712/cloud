import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import DesktopWalletAddress from '../Desktop/DesktopWalletAddress';
import MobileWalletAddress from '../Mobile/MobileWalletAddress';
import MobileMyActivation from '../Mobile/MobileMyActivation';
import DesktopMyActivation from '../Desktop/DesktopMyActivation';

const MyActivation = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobileMyActivation /> : <DesktopMyActivation />}</>;
};

export default MyActivation;
