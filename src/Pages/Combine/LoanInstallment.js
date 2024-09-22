import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import MobNewActivation from '../Mobile/MobNewActivation';
import DesktopNewActivation from '../Desktop/DesktopNewActivation';
import MobLoanInstallment from '../Mobile/MobLoanInstallment';
import DesktopLoanInstallment from '../Desktop/DesktopLoanInstallment';

const LoanInstallment = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobLoanInstallment /> : <DesktopLoanInstallment />}</>;
};

export default LoanInstallment;
