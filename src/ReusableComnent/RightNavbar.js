import { Box, Grid } from '@mui/material';
import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import {
	RiUserAddLine,
	RiWallet2Line,
	RiLogoutCircleLine,
} from 'react-icons/ri';
import { MdGroups } from 'react-icons/md';
import { IoCalculatorOutline } from 'react-icons/io5';
import { GiSpeedometer } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const RightNavbar = () => {
	const menu_item = [
		{
			name: 'Dashboard',
			logo: <RxDashboard />,
		},
		{
			name: 'Add a member',
			logo: <RiUserAddLine />,
			rightarrow: <MdKeyboardArrowRight />,
		},
		{
			name: 'Activation',
			logo: <MdGroups />,
		},
		{
			name: 'Fund',
			logo: <RiWallet2Line />,
		},
		{
			name: 'Network',
			logo: <MdGroups />,
		},
		{
			name: 'Income Wallet',
			logo: <RiWallet2Line />,
		},
		{
			name: 'Withdraw',
			logo: <RiWallet2Line />,
		},
		{
			name: 'Loan',
			logo: <IoCalculatorOutline />,
		},
		{
			name: 'Setting',
			logo: <GiSpeedometer />,
		},
		{
			name: 'Support',
			logo: <BiSupport />,
		},
		{
			name: 'Logout Off',
			logo: <RiLogoutCircleLine />,
		},
	];
	return (
		<>
			<Grid style={{ background: '#20295b' }} item lg={2}>
				<Box mt={5} mb={3} style={{ textAlign: 'center', color: 'white' }}>
					<h5>Menu</h5>
				</Box>
				{menu_item.map((item, i) => (
					<Box
						key={i}
						mt={2}
						style={{
							textAlign: 'center',
							display: 'flex',
							color: '#859db4',
							justifyContent: 'space-between',
							fontWeight: '600',
							padding: '10px 20px',
						}}>
						<Box style={{ display: 'flex' }}>
							<Box>{item.logo}</Box>
							<Box ml={1} style={{ fontSize: '20px' }}>
								{item.name}
							</Box>
						</Box>
						<Box>{item.rightarrow}</Box>
					</Box>
				))}
			</Grid>
		</>
	);
};

export default RightNavbar;
