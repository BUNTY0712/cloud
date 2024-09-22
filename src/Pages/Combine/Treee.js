import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import DesktopWalletAddress from '../Desktop/DesktopWalletAddress';
import MobileWalletAddress from '../Mobile/MobileWalletAddress';
import MobProfile from '../Mobile/MobProfile';
import DesktopProfile from '../Desktop/DesktopProfile';
import MobTree from '../Mobile/MobTree';
import DesktopTree from '../Desktop/DesktopTree';

const Treee = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobTree /> : <DesktopTree />}</>;
};

export default Treee;
