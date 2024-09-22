import { useMediaQuery, Box } from '@mui/material';
import React from 'react';
import MobLoanList from '../Mobile/MobLoanList';
import DesktopLoanList from '../Desktop/DesktopLoanList';

const LoanList = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobLoanList /> : <DesktopLoanList />}</>;
};

export default LoanList;
