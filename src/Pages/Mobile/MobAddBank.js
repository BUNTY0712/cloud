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

const MobAddBank = () => {
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
								<Box ml={1} style={{ fontSize: '18px', fontWeight: '500' }}>
									Add Bank
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
							{/* Account holder name  */}
							<Box>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									Account Holder Name
								</Box>
								<Box mt={1}>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='Account Holder Name'
										type='text'
									/>
								</Box>
							</Box>

							{/* IFSC No  */}
							<Box mt={1.5}>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									IFSC No
								</Box>
								<Box mt={1}>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='IFSC No'
										type='text'
									/>
								</Box>
								<Box style={{ display: 'flex' }}>
									<Box
										style={{
											display: 'flex',
											background: '#3fa7d6',
											color: 'white',
											padding: '5px 10px',
											alignItems: 'center',
											borderRadius: '5px',
										}}>
										<Box style={{ fontSize: '15px' }}>Check</Box>
									</Box>
								</Box>
							</Box>

							{/* Bank Name  */}
							<Box mt={1.5}>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									Bank name
								</Box>
								<Box mt={1}>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='Bank name'
										type='text'
									/>
								</Box>
							</Box>

							{/* Branch Name  */}
							<Box mt={1.5}>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									Branch Name
								</Box>
								<Box mt={1}>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='Branch Name'
										type='text'
									/>
								</Box>
							</Box>

							{/* Bank Account Number  */}
							<Box mt={1.5}>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									Bank Account Number
								</Box>
								<Box mt={1}>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='Bank Account Number'
										type='text'
									/>
								</Box>
							</Box>

							{/* Pan No  */}
							<Box mt={1.5}>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									Pan No
								</Box>
								<Box mt={1}>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='Pan No'
										type='text'
									/>
								</Box>
							</Box>

							{/* Save BEP20 Address  */}

							<Box
								mt={4}
								style={{ display: 'flex', justifyContent: 'flex-end' }}>
								<Box
									style={{
										color: 'white',
										background: '#4986ff',
										padding: '10px 13px',
										borderRadius: '5px',
									}}>
									Save Account
									<span style={{ paddingBottom: '8px' }}>
										<IoIosSave />
									</span>
								</Box>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default MobAddBank;
