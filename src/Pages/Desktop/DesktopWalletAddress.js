import { Box, Grid } from '@mui/material';
import React from 'react';
import RightNavbar from '../../ReusableComnent/RightNavbar';
import UpperMenu from './ResuableComponent.js/UpperMenu';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosSave } from 'react-icons/io';
import { CiCircleList } from 'react-icons/ci';
// import { GoAlertFill } from 'react-icons/go';
import { RiAlertFill } from 'react-icons/ri';
import { BiBorderBottom, BiSolidBank } from 'react-icons/bi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
const DesktopWalletAddress = () => {
	return (
		<>
			<Grid container>
				<RightNavbar />
				<Grid item lg={10}>
					<UpperMenu />
					<Box
						mt={2}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '0px 15px 10px 15px',
							borderBottom: '1px solid #e9ebeb',
						}}>
						<Box style={{ fontWeight: 'bold', fontSize: '17px' }}>
							WALLET BEP 20
						</Box>
						<Box style={{ display: 'flex' }}>
							<Box>Withdraw Bank</Box>
							<Box ml={1}>
								<MdKeyboardArrowRight />
							</Box>
							<Box ml={1}>BEP 20</Box>
						</Box>
					</Box>

					<Grid container>
						<Grid item lg={0.5}></Grid>
						<Grid item lg={6.5} mx='auto'>
							<Box
								mt={2}
								style={{ border: '1px solid #e9ebec', paddingBottom: '30px' }}>
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
											<BiSolidBank style={{ fontSize: '18px' }} />
										</Box>
										<Box ml={1} style={{ fontSize: '19px' }}>
											Add BEP 20 Wallet
										</Box>
									</Box>

									<Box
										style={{
											display: 'flex',
											background: '#3fa7d6',
											color: 'white',
											padding: '5px 10px',
											alignItems: 'center',
											borderRadius: '5px',
										}}>
										<Box mr={1}>
											<CiCircleList />
										</Box>
										<Box style={{ fontSize: '15px' }}>List</Box>
									</Box>
								</Box>

								<Box mt={3} style={{ padding: '28px' }}>
									{/* Address  */}
									<Box
										style={{
											background: '#fff7e6',
											paading: '20px',
											display: 'flex',
											padding: '15px',
										}}>
										<Box>
											<RiAlertFill
												style={{ color: '#ee6352', fontSize: '18px' }}
											/>
										</Box>

										<Box
											ml={1}
											style={{
												fontSize: '20px',
												// fontWeight: '500',
												color: '#495057',
											}}>
											Address can not be updated once registered !
										</Box>
									</Box>

									{/* BEP20 Address input */}
									<Box
										mt={3}
										style={{
											display: 'flex',
											justifyContent: 'space-between',
										}}>
										<Box
											style={{
												fontSize: '17px',
												color: '#ee6352',
												fontWeight: '500',
											}}>
											BEP20 <span style={{ fontSize: '16px' }}>Address</span>
										</Box>

										<Box>
											<input
												style={{
													padding: '10px',
													width: '400px',
													border: '1px solid #ced4da',
													borderRadius: '4px',
													// borderColor: '',
												}}
												placeholder='BEP20 Address starts with 0x...'
												type='text'
											/>
										</Box>
									</Box>

									{/* OPT  */}
									<Box
										// ml={5}
										mt={3}
										style={{
											display: 'flex',
											justifyContent: 'space-between',
										}}>
										<Box
											// pr={5}
											style={{
												fontSize: '17px',
												color: '#ee6352',
												fontWeight: '500',
											}}>
											OPT
										</Box>

										<Box style={{ width: '400px' }}>
											<Box style={{ display: 'flex' }}>
												<Box>
													<input
														style={{
															padding: '10px',
															width: '100px',
															border: '1px solid #ced4da',
															borderRadius: '4px',
															// borderColor: '',
														}}
														placeholder='0'
														type='text'
													/>
												</Box>

												<Box
													style={{
														padding: '10px 15px',
														border: '1px solid #4788ff',
														color: '#4788ff',
													}}>
													Request OTP
												</Box>
											</Box>
										</Box>

										{/* <Box></Box> */}
									</Box>

									{/* Save BEP20 Address  */}

									<Box
										mt={4}
										style={{ display: 'flex', justifyContent: 'flex-end' }}>
										<Box
											style={{
												color: 'white',
												background: '#8c68cd',
												padding: '10px 13px',
												borderRadius: '5px',
											}}>
											Save BEP20 Address{' '}
											<span style={{ paddingBottom: '8px' }}>
												<IoIosSave />
											</span>
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>

						{/* <Grid item lg={3.5} mx='auto'>
							<Box
								mt={2}
								style={{ border: '1px solid #e9ebec', paddingBottom: '30px' }}>
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
						</Grid> */}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default DesktopWalletAddress;
