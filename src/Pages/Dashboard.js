import { Box, Grid } from '@mui/material';
import React from 'react';
import RightNavbar from '../ReusableComnent/RightNavbar';
import { HiMenuAlt2 } from 'react-icons/hi';
import { CiMenuFries } from 'react-icons/ci';
import { RiMenu2Line } from 'react-icons/ri';
import { BiTimer } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Dashboard = () => {
	return (
		<>
			<Grid container>
				<RightNavbar />
				<Grid item lg={10}>
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
						<Box style={{ fontSize: '30px' }}>
							<RiMenu2Line />
						</Box>

						<Box>Logo </Box>
					</Box>
					<Box
						mt={2}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '0px 20px',
						}}>
						<Box style={{ fontWeight: 'bold', fontSize: '20px' }}>
							Dashboard
						</Box>
						<Box style={{ display: 'flex' }}>
							<Box>Dashboard</Box>
							<Box ml={1}>
								<MdKeyboardArrowRight />
							</Box>
							<Box ml={1}>Statistics</Box>
						</Box>
					</Box>

					<Box mt={2} style={{ padding: '10px', background: '#ecf3ff' }}>
						<marquee style={{ fontSize: '18px', fontWeight: '600' }}>
							Welcome to cloudtechno.biz.
						</marquee>
					</Box>

					<Grid container>
						<Grid item lg={3}>
							<Box
								style={{
									background: '#e2f5ec',
									display: 'flex',
									padding: '10px 20px',
									justifyContent: 'space-between',
								}}>
								<Box>
									<BiTimer />
								</Box>
								<Box>Active Loans & EWI</Box>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
