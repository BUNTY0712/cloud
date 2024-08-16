import { Box, Grid } from '@mui/material';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosSave } from 'react-icons/io';
import { CiCircleList } from 'react-icons/ci';
// import { GoAlertFill } from 'react-icons/go';
import { RiAlertFill } from 'react-icons/ri';
import { BiBorderBottom, BiSolidBank } from 'react-icons/bi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import UpperMenu from '../Desktop/ResuableComponent.js/UpperMenu';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';

const MobileWalletAddress = () => {
	return (
		<>
			<Grid container>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<MobileUpperMenu />
				</Grid>
			</Grid>
			{/* <Box style={{ border: '1px solid red', padding: '20px' }}></Box> */}
			<Grid container>
				<Grid item lg={0.5}></Grid>
				<Grid item lg={12} md={12} sm={12} xs={12} mx='auto'>
					<Box className='mob-add-padd' mt={2}>
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
								<Box className='mob-list-mar'>
									<Box mr={1}>
										<CiCircleList />
									</Box>
								</Box>

								<Box style={{ fontSize: '15px' }}>List</Box>
							</Box>
						</Box>

						<Box
							// mt={3}
							style={{ padding: '28px', border: '1px solid #e9ebec' }}>
							{/* Address  */}
							<Box
								style={{
									background: '#fff7e6',
									paading: '20px',
									display: 'flex',
									padding: '15px',
								}}>
								<Box>
									<RiAlertFill style={{ color: '#ee6352', fontSize: '18px' }} />
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
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									BEP20 <span style={{ fontSize: '16px' }}>Address</span>
								</Box>
							</Box>
							<Box mt={1}>
								<input
									style={{
										padding: '10px',
										width: '100%',
										border: '1px solid #ced4da',
										borderRadius: '4px',
										// borderColor: '',
									}}
									placeholder='BEP20 Address starts with 0x...'
									type='text'
								/>
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
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
									}}>
									OPT
								</Box>
							</Box>
							<Box mt={1} style={{ width: '400px' }}>
								<Box style={{ display: 'flex' }}>
									<Box>
										<input
											style={{
												padding: '10px',
												// width: '100px',
												width: '100%',
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

				<Grid item lg={12} md={12} xs={12} sm={12} mx='auto'>
					<Box className='mob-add-padd'>
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
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default MobileWalletAddress;
