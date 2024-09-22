import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import DesktopWalletAddress from '../Desktop/DesktopWalletAddress';
import MobileWalletAddress from '../Mobile/MobileWalletAddress';
import MobWithdrwal from '../Mobile/MobWithdrwal';
import DesktopWithdrawal from '../Desktop/DesktopWithdrawal';

const Withdrawal = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobWithdrwal /> : <DesktopWithdrawal />}</>;
};

export default Withdrawal;
