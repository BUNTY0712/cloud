import { Box, Grid } from '@mui/material';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import RightNavbar from '../../ReusableComnent/RightNavbar';
import UpperMenu from './ResuableComponent.js/UpperMenu';
import MUIDataTable from 'mui-datatables';
import { IoIosSave } from 'react-icons/io';
import { BiDetail } from 'react-icons/bi';

import { CiCircleList } from 'react-icons/ci';
// import { GoAlertFill } from 'react-icons/go';
import { RiAlertFill } from 'react-icons/ri';
import { TbArrowsExchange } from 'react-icons/tb';
import { BiBorderBottom, BiSolidBank } from 'react-icons/bi';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const DesktopNewActivation = () => {
	return (
		<>
			<Grid container>
				<RightNavbar />
				<Grid item lg={10}>
					<UpperMenu />

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
											{/* <IoIosInformationCircleOutline /> */}
											<IoIosInformationCircleOutline
												style={{ fontSize: '18px' }}
											/>
										</Box>
										<Box ml={1} style={{ fontSize: '17px', fontWeight: '500' }}>
											New Activation
										</Box>
									</Box>
								</Box>

								<Box className='flex-box'>
									{/* To Member */}
									<Box mt={3} style={{ padding: '28px', width: '60%' }}>
										<Box className='to-mem-bold'>
											Max 50% (800) from Fund Wallet & min 50% (800) or more
											from Activation wallet will be used for activations
										</Box>
										<Box className=''>
											Activation Wallet needs to hold minimum BOD INR to proceed
											next
										</Box>
										<Box mt={2} className='my-button'>
											Activation Wallet Report
										</Box>

										<Box mt={2} className='to-member'>
											To Member
										</Box>
										<Box className='be-transferred'>To be transferred</Box>

										{/* input  */}
										<Box mt={1}>
											<input
												style={{
													padding: '10px',
													width: '300px',
													border: '1px solid #ced4da',
													borderRadius: '4px',
													// borderColor: '',
												}}
												placeholder='BEP20 Address starts with 0x...'
												type='text'
											/>
										</Box>

										{/* verify  */}
										<Box
											mt={2}
											style={{
												padding: '8px 15px',
												background: '#3fa7d6',
												color: 'white',
												borderRadius: '5px',
												width: '25%',
											}}>
											<span>
												<BiDetail />
											</span>{' '}
											Verify
										</Box>
									</Box>

									{/* Fund Transfer  */}
									<Box mt={3} style={{ padding: '28px', width: '40%' }}>
										<Box className='to-mem-bold'>Members Details</Box>
										<Box mt={2} className='to-mem-bold'>
											Topup Package
										</Box>

										<Box className='to-mem-bold'>...</Box>

										<Box className='to-mem-bold'>Payment by</Box>

										{/* <Box className='to-mem-UserId'>Top Package</Box> */}
										<Box mt={1}>
											<select className='form-control' name='cars' id='cars'>
												<option value='volvo'>--Please select a type--</option>
												<option value='saab'>Saab</option>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</select>
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>

						<Grid item lg={3.5} mx='auto'>
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

export default DesktopNewActivation;
