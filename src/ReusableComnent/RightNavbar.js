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
import { setMenuList } from '../Reducers/UiReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RightNavbar = () => {
	const { menulist } = useSelector((state) => state.ui);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const menu_item = [
		{
			name: 'Dashboard',
			logo: <RxDashboard />,
		},
		{
			name: 'Add a member',
			logo: <RiUserAddLine />,
		},
		{
			name: 'Activation',
			logo: <MdGroups />,
			rightarrow: <MdKeyboardArrowRight />,
			link1: 'New Activation',
			link2: 'Report',
			link3: 'Activation Wallet',
			// link4: 'History',

			nav1: '/newactivationn',
			nav2: '/report',
			nav3: '/activationwallet',
		},
		{
			name: 'Fund',
			logo: <RiWallet2Line />,
			rightarrow: <MdKeyboardArrowRight />,
			link1: 'Add Fund (USDT Crypto)',
			link2: 'Fund Transfer',
			link3: 'Wallet To Fund Wallet',
			link4: 'History',
			nav1: '/addfund',
			nav2: '/fundtransfer',
			nav3: '/wallettofund',
		},
		{
			name: 'Network',
			logo: <MdGroups />,
			link1: 'Direct',
			link2: 'Tree',
			rightarrow: <MdKeyboardArrowRight />,
			nav1: '/direct',
			nav2: '/tree',
		},
		{
			name: 'Income Wallet',
			logo: <RiWallet2Line />,
		},
		{
			name: 'Withdraw',
			logo: <RiWallet2Line />,
			link1: 'Wallet Address',
			link2: 'Withdraw',
			link3: 'History',
			rightarrow: <MdKeyboardArrowRight />,
			nav1: '/walletaddress',
			nav2: '/tree',
			nav3: '/history',
		},
		{
			name: 'Loan',
			logo: <IoCalculatorOutline />,
			link1: 'Loan history',
			link2: 'Loan Installment (EMI)',
			rightarrow: <MdKeyboardArrowRight />,
			nav1: '/loanhistory',
			nav2: '/loaninstallment',
		},
		{
			name: 'Setting',
			logo: <GiSpeedometer />,
			link1: 'Profile',
			link2: 'Add bank',
			link3: 'Kyc',
			link4: 'Change Password',
			rightarrow: <MdKeyboardArrowRight />,
			nav1: '/profile',
			nav2: '/addbank',
			nav3: '/kyc',
			nav4: '/changepassword',
		},
		{
			name: 'Support',
			logo: <BiSupport />,
			link1: 'New ticket',
			link2: 'List',
			rightarrow: <MdKeyboardArrowRight />,
			nav1: '/newticket',
			nav2: '/list',
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
					<React.Fragment key={i}>
						<Box
							onClick={() =>
								dispatch(
									setMenuList(
										item.name === menulist.name ? '' : { name: item.name }
									)
								)
							}
							mt={2}
							style={{
								textAlign: 'center',
								display: 'flex',
								color: '#859db4',
								justifyContent: 'space-between',
								fontWeight: '600',
								padding: '10px 20px',
								cursor: 'pointer',
							}}>
							<Box style={{ display: 'flex' }}>
								<Box>{item.logo}</Box>
								<Box ml={1} style={{ fontSize: '20px' }}>
									{item.name}
								</Box>
							</Box>
							<Box>{item.rightarrow}</Box>
						</Box>

						{menulist.name === item.name && ( // Corrected conditional rendering
							<Box>
								{item.link1 && (
									<Box
										onClick={() => navigate(item.nav1)}
										style={{
											display: 'flex',
											padding: '10px 28px',
											color: 'white',
											cursor: 'pointer',
										}}>
										<Box>-</Box>
										<Box ml={1}>{item.link1}</Box>
									</Box>
								)}
								{item.link2 && (
									<Box
										style={{
											display: 'flex',
											textAlign: 'center',
											color: 'white',
											padding: '10px 28px',
											cursor: 'pointer',
										}}>
										<Box>-</Box>
										<Box ml={1}>{item.link2}</Box>
									</Box>
								)}
								{item.link3 && (
									<Box
										style={{
											display: 'flex',
											textAlign: 'center',
											color: 'white',
											padding: '10px 28px',
											cursor: 'pointer',
										}}>
										<Box>-</Box>
										<Box ml={1}>{item.link3}</Box>
									</Box>
								)}
							</Box>
						)}
					</React.Fragment>
				))}
			</Grid>
		</>
	);
};

export default RightNavbar;
