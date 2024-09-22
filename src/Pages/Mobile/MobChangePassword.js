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
import { LiaKeySolid } from 'react-icons/lia';

const MobChangePassword = () => {
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
							Setting
						</Box>
					</Box>

					<Box
						mt={0.5}
						style={{
							display: 'flex',
							paddingLeft: '20px',
							paddingRight: '20px',
							paddingBottom: '15px',
							borderBottom: '1px solid #b3b3b3',
						}}>
						<Box style={{ color: 'black', fontWeight: '500' }}>Members</Box>
						<Box ml={1}>
							<MdKeyboardArrowRight style={{ paddingTopTop: '4px' }} />
						</Box>
						<Box style={{ color: 'grey' }} ml={1}>
							Change password
						</Box>
					</Box>
					<Box className='mob-add-padd' mt={2}>
						<Box
							style={{
								background: '#efe8f8',
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
									<LiaKeySolid style={{ fontSize: '25px' }} />
								</Box>
								<Box ml={1} style={{ fontSize: '18px', fontWeight: '500' }}>
									Change your current password
								</Box>
							</Box>
						</Box>

						<Box
							// mt={3}
							style={{ padding: '28px', border: '1px solid #e9ebec' }}>
							{/* Current Password  */}
							<Box>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									Current Password
								</Box>
								<Box>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='Current Password'
										type='text'
									/>
								</Box>
							</Box>

							{/* New Password  */}
							<Box mt={1.5}>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									New Password
								</Box>
								<Box>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='New Password'
										type='text'
									/>
								</Box>
							</Box>

							{/* Confirm Password  */}
							<Box mt={1.5}>
								<Box
									style={{
										fontSize: '17px',
										// color: '#ee6352',
										color: 'black',
										fontWeight: '500',
										width: '100%',
									}}>
									Confirm Password
								</Box>
								<Box>
									<input
										style={{
											padding: '9px',
											width: '100%',
											border: '1px solid #ced4da',
											borderRadius: '4px',
											// borderColor: '',
										}}
										placeholder='Confirm Password'
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

										background: ' #8b69cb',
										paddingLeft: '13px',
										paddingRight: '16px',
										paddingTop: '5px',
										paddingBottom: '12px',

										borderRadius: '5px',
									}}>
									<span
										style={{
											// paddingBottom: '8px',
											fontSize: '25px',
											marginRight: '15px',
										}}>
										<IoIosSave />
									</span>
									Save Changes
								</Box>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default MobChangePassword;
