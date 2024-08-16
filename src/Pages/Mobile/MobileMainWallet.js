import { Box, Grid } from '@mui/material';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import RightNavbar from '../../ReusableComnent/RightNavbar';
import MUIDataTable from 'mui-datatables';
import { IoIosSave } from 'react-icons/io';
import { BiDetail } from 'react-icons/bi';

import { CiCircleList } from 'react-icons/ci';
// import { GoAlertFill } from 'react-icons/go';
import { RiAlertFill } from 'react-icons/ri';
import { TbArrowsExchange } from 'react-icons/tb';
import { BiBorderBottom, BiSolidBank } from 'react-icons/bi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';

const MobileMainWallet = () => {
	return (
		<>
			<Grid container>
				<Grid item lg={10} md={11} xs={12} sm={12}>
					<MobileUpperMenu />
					<Box
						mt={2}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '0px 20px',
						}}>
						<Box
							style={{
								fontWeight: 'bold',
								fontSize: '17px',
								textTransform: 'uppercase',
							}}>
							Main Wallet To fund transfer{' '}
							<span
								style={{
									fontSize: '15px',
									fontWeight: 'bold',
									color: '#878a99',
								}}>
								[ REFERRED ]
							</span>
						</Box>
					</Box>
					<Box
						mt={0.5}
						style={{
							display: 'flex',
							padding: '0px 20px',
							borderBottom: '1px sloid grey',
						}}>
						<Box>Wallet</Box>
						<Box ml={1}>
							<MdKeyboardArrowRight />
						</Box>
						<Box ml={1}>Fund Wallet Transfer</Box>
					</Box>
					<Grid container>
						<Grid item lg={0.5}></Grid>
						<Grid item lg={10} sm={11} xs={11} mx='auto'>
							<Box
								mt={5}
								style={{
									border: '1px solid #e9ebec',
									paddingBottom: '30px',
									// margin: '15px',
								}}>
								<Box
									style={{
										background: '#e2f2f9',
										padding: '18px',
										display: 'flex',
										justifyContent: 'space-between',
									}}>
									<Box
										// mt={4}
										style={{
											display: 'flex',
											alginItems: 'center',
										}}>
										<Box>
											<TbArrowsExchange style={{ fontSize: '18px' }} />
										</Box>
										<Box
											ml={1}
											style={{ fontSize: '17px', fontWeight: 'bold' }}>
											Fund Wallet Transfer
										</Box>
									</Box>
								</Box>

								<Box className='flex-box'>
									{/* To Member */}
									<Box mt={3} style={{ padding: '28px', width: '60%' }}>
										<Box className='to-mem-bold'>To Member</Box>
										<Box className='to-mem-UserId'>To Member UserId</Box>
										<Box>
											<input
												style={{
													padding: '10px',
													width: '300px',
													border: '1px solid #ced4da',
													borderRadius: '4px',
													// borderColor: '',
												}}
												placeholder=''
												type='text'
											/>
										</Box>
										<Box mt={2} className='my-button'>
											<Box>
												<Box className='BiDetail'>
													<BiDetail />
												</Box>
											</Box>
											<Box>Fetch Details</Box>
										</Box>
										<Box mt={2}>
											<Box className='fund-balance'>Fund Balance</Box>
											<Box className='fund-balance'>Current fund balance</Box>
											<Box className='fund-balance'>0.00</Box>
										</Box>
									</Box>
								</Box>
								{/* Fund Transfer  */}
								<Box mt={3} style={{ padding: '28px', width: '40%' }}>
									<Box className='to-mem-bold'>Transfer Fund</Box>
									<Box className='to-mem-UserId'>Amount</Box>
									<Box>
										<input
											style={{
												padding: '10px',
												width: '300px',
												border: '1px solid #ced4da',
												borderRadius: '4px',
												// borderColor: '',
											}}
											placeholder=''
											type='text'
										/>
									</Box>
								</Box>
								<Box className='proceed-space'>
									<Box ml={1} className='my-button-proceed'>
										Proceed To Transfer
									</Box>
								</Box>
							</Box>
						</Grid>

						<Grid item lg={3.5} sm={11} xs={11} mx='auto'>
							<Box
								mt={2}
								style={{ border: '1px solid #e9ebec', paddingBottom: '30px' }}>
								{/* Note  */}
								<Box
									// mt={2}
									style={{
										display: 'flex',
										background: '#e2f2f9',
										// background: '#e2f2f9',
										padding: '18px',
										fontSize: '18px',
										fontWeight: '500',
									}}>
									<Box>
										<IoIosInformationCircleOutline />
									</Box>
									<Box ml={1}>Note :</Box>
								</Box>
								<Box style={{ padding: '20px' }}>
									<Box style={{ fontSize: '19px' }}>
										BEP20 address starts with 0x and is 42 character long.
									</Box>

									<Box mt={1} style={{ color: '#3fa7d6', fontSize: '19px' }}>
										You can only add one address and will not be able to change
										later.
									</Box>
									<Box style={{ fontSize: '18px' }}>
										<Box>Kindly verify details before adding.</Box>

										<Box>
											If need to make any changes,{' '}
											<Box style={{ marginTop: '20px' }}>
												please contact admin via Support Ticket.
											</Box>
										</Box>
									</Box>

									<Box
										mt={1}
										style={{ display: 'flex', justifyContent: 'flex-end' }}>
										<Box
											style={{
												padding: '10px 15px',
												background: '#3fa7d6',
												color: 'white',
												borderRadius: '5px',
											}}>
											Ticket
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default MobileMainWallet;
