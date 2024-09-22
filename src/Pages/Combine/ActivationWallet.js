import { useMediaQuery, Box } from '@mui/material';
import React from 'react';
import DesktopActivationWallet from '../Desktop/DesktopActivationWallet';
import MobActivationWallet from '../Mobile/MobActivationWallet';

const ActivationWallet = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobActivationWallet /> : <DesktopActivationWallet />}</>;
};

export default ActivationWallet;
