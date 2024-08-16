import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import DesktopWalletAddress from '../Desktop/DesktopWalletAddress';
import MobileWalletAddress from '../Mobile/MobileWalletAddress';

const WalletAdress = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobileWalletAddress /> : <DesktopWalletAddress />}</>;
};

export default WalletAdress;
