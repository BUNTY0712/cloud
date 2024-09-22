import { Box, Grid, colors } from '@mui/material';
import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { CiMenuFries } from 'react-icons/ci';
import { RiMenu2Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { BiFontFamily, BiTimer } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import referal from '../../../Assets/Image/referal.jpeg';
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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setMobMenu } from '../../../Reducers/UiReducer';
import { useNavigate } from 'react-router-dom';

const MobileUpperMenu = () => {
	const navigate = useNavigate();
	const { mobmenu } = useSelector((state) => state.ui);
	const [togglenav, setNavtoggle] = useState('off');
	const [name, setName] = useState('');

	const dispatch = useDispatch();
	const menu_item = [
		{
			name: 'Dashboard',
			logo: <RxDashboard />,
			directnav: 'on',
			nav1: '/dashboard',
		},
		{
			name: 'Add a member',
			logo: <RiUserAddLine />,
			directnav: 'on',
			nav1: '/addnewmember',
		},
		{
			name: 'Activation',
			logo: <MdGroups />,
			rightarrow: <MdKeyboardArrowRight />,
			link1: 'New Activation',
			// link2: 'Report',
			link3: 'Activation Wallet',
			nav1: '/newactivationn',
			// nav2: '/report',
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
			nav3: '/fundwallet',
		},
		{
			name: 'Network',
			logo: <MdGroups />,
			// link1: 'Direct',
			link2: 'Tree',
			rightarrow: <MdKeyboardArrowRight />,
			// nav1: '/direct',
			nav2: '/tree',
		},
		{
			name: 'Income Wallet',
			logo: <RiWallet2Line />,
			directnav: 'on',
			nav1: '/incomewallet',
		},
		{
			name: 'Withdraw',
			logo: <RiWallet2Line />,
			link1: 'Wallet Address',
			link2: 'Withdraw',
			link3: 'History',
			rightarrow: <MdKeyboardArrowRight />,
			nav1: '/walletaddress',
		},
		{
			name: 'Loan',
			logo: <IoCalculatorOutline />,
			// link1: 'Loan history',
			link2: 'Loan Installment (EMI)',
			rightarrow: <MdKeyboardArrowRight />,
			// nav1: '/loanhistory',
			nav2: '/loaninstallment',
		},
		{
			name: 'Setting',
			logo: <GiSpeedometer />,
			link1: 'Profile',
			link2: 'Add bank',
			// link3: 'Kyc',
			link4: 'Change Password',
			rightarrow: <MdKeyboardArrowRight />,
			nav1: '/profile',
			nav2: '/addbank',
			// nav3: '/kyc',
			nav4: '/changepassword',
		},
		{
			name: 'Support',
			logo: <BiSupport />,
			// link1: 'New ticket',
			// link2: 'List',
			rightarrow: <MdKeyboardArrowRight />,
			// nav1: '/newticket',
			// nav2: '/list',
		},
		{
			name: 'Logout Off',
			logo: <RiLogoutCircleLine />,
			directnav: 'on',
			nav1: '/',
		},
	];

	const handleClick = async (item) => {
		setName(item.name);
		setNavtoggle((prevState) => (prevState === 'off' ? 'on' : 'off'));
		if (item.directnav === 'on') {
			navigate(item.nav1);
			dispatch(setMobMenu('off'));
		}
	};

	return (
		<>
			<Box className='mob-border'>
				{mobmenu === 'on' && (
					<Box className='mob-menu-data'>
						<Grid container>
							<Grid
								style={{ background: '#20295b' }}
								item
								lg={1}
								sm={12}
								xs={12}>
								<Box className='flex-box-2'>
									<Box style={{ textAlign: 'center', color: 'white' }}>
										<h5>Menu</h5>
									</Box>
									<Box onClick={() => dispatch(setMobMenu('off'))}>
										<RxCross2 className='cross-color' />
									</Box>
								</Box>

								{menu_item.map((item, i) => (
									<React.Fragment key={i}>
										<Box
											onClick={() => handleClick(item)}
											mt={2}
											style={{
												textAlign: 'center',
												display: 'flex',
												color: '#859db4',
												justifyContent: 'space-between',
												fontWeight: '600',
												padding: '10px 20px',
												marginRight: '45px',
											}}>
											<Box style={{ display: 'flex', alignItems: 'center' }}>
												<Box mt={0.4}>{item.logo}</Box>
												<Box ml={1} style={{ fontSize: '20px' }}>
													{item.name}
												</Box>
											</Box>
											<Box>{item.rightarrow}</Box>
										</Box>

										{/* Submenu logic */}
										{togglenav === 'on' && name === item.name && (
											<Box>
												{['link1', 'link2', 'link3', 'link4'].map(
													(linkKey, index) =>
														item[linkKey] && (
															<Box
																key={index}
																onClick={() => {
																	navigate(item[`nav${index + 1}`]);
																	dispatch(setMobMenu('off'));
																}}
																style={{
																	display: 'flex',
																	padding: '10px 28px',
																	color: 'white',
																	cursor: 'pointer', // For better UX
																}}>
																<Box>-</Box>
																<Box ml={1}>{item[linkKey]}</Box>
															</Box>
														)
												)}
											</Box>
										)}
									</React.Fragment>
								))}
							</Grid>
						</Grid>
					</Box>
				)}

				{/* Top bar */}
				<Box
					style={{
						height: '10vh',
						background: '#192072',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '0px 20px',
						color: 'white',
					}}>
					<Box
						onClick={() => dispatch(setMobMenu('on'))}
						style={{ fontSize: '30px' }}>
						<RiMenu2Line />
					</Box>

					<Box>
						<img style={{ width: '100px' }} src={referal} alt='' />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default MobileUpperMenu;
