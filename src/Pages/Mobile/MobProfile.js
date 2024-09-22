import { Box, Grid } from '@mui/material';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import RightNavbar from '../../ReusableComnent/RightNavbar';
import MUIDataTable from 'mui-datatables';
import { IoIosSave } from 'react-icons/io';
import { BiDetail } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { LuCopy } from 'react-icons/lu';
import { AiOutlineLogin } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { MdOutlineKey } from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { CiCircleList } from 'react-icons/ci';
// import { GoAlertFill } from 'react-icons/go';
import { RiAlertFill } from 'react-icons/ri';
import { TbArrowsExchange } from 'react-icons/tb';
import { BiBorderBottom, BiSolidBank } from 'react-icons/bi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';

const MobProfile = () => {
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
							<span>
								<FaRegUser style={{ fontSize: '14px' }} />
							</span>{' '}
							Profile
						</Box>
					</Box>
					<Box
						mt={0.5}
						style={{
							display: 'flex',
							padding: '0px 20px',
							borderBottom: '1px sloid grey',
						}}>
						<Box>Members</Box>
						<Box style={{ color: '#a7a6aa' }} ml={1}>
							<MdKeyboardArrowRight />
						</Box>
						<Box style={{ color: '#a7a6aa' }} ml={1}>
							Profile
						</Box>
					</Box>
					<Grid container>
						<Grid item lg={0.5}></Grid>
						<Grid item lg={10} sm={11} xs={11} mx='auto'>
							<Box
								style={{
									border: '1px solid #a7a6aa',
									marginTop: '15px',
									borderRadius: '5px',
								}}>
								<Box style={{ textAlign: 'center', padding: '50px 10px' }}>
									<Box>
										<RiShieldUserLine
											style={{ fontSize: '22px', fontWeight: '600' }}
										/>
									</Box>
									<Box style={{ fontSize: '19px', fontWeight: '600' }}>
										Ashok kumar das
									</Box>
									<Box>Id: ibrar</Box>
									<Box>
										Status:
										<span>
											<TiTick
												style={{ color: '#83b7a3', padding: '0px 2px' }}
											/>
										</span>
										Activated
									</Box>

									<Box style={{ marginTop: '8px' }}>Join Date: 23-Dec-23</Box>
									<Box style={{ marginTop: '8px' }}>Time: 12:49:24</Box>
									<Box style={{ padding: '0px 15px' }}>
										<hr />
									</Box>

									{/* profile key  */}
									<Box
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											padding: '0px 13px',
										}}>
										<Box style={{ display: 'flex' }}>
											<Box>
												<MdOutlineKey
													style={{ color: '#e2908a', marginRight: '4px' }}
												/>
											</Box>
											<Box>Profile Key</Box>
										</Box>
										<Box style={{ color: '#e2908a' }}>444017bfd68</Box>

										<Box style={{ background: '#f6f7fb', padding: '1px 5px' }}>
											<LuCopy />
										</Box>
									</Box>
									<Box style={{ margin: '0px 10px' }}>
										<hr />
									</Box>
									{/* last login  */}
									<Box
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											padding: '0px 13px',
										}}>
										<Box style={{ display: 'flex' }}>
											<Box>
												<AiOutlineLogin style={{ marginRight: '4px' }} />
											</Box>
											<Box>Profile Key</Box>
										</Box>
										<Box>6/6/2024 6:24:30 AM</Box>
									</Box>

									<Box style={{ margin: '0px 10px' }}>
										<hr />
									</Box>
									{/* bank  */}
									<Box
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											padding: '0px 13px',
										}}>
										<Box style={{ display: 'flex' }}>
											<Box>
												<BiSolidBank style={{ marginRight: '4px' }} />
											</Box>
											<Box>Profile Key</Box>
										</Box>
										<Box style={{ background: '#f6f7fb', padding: '1px 5px' }}>
											<span>+</span> Add Account
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>

						<Grid item lg={3.5} sm={11} xs={11} mx='auto'>
							<Box
								style={{
									border: '1px solid #a7a6aa',
									marginTop: '15px',
									borderRadius: '5px',
									padding: '20px',
								}}>
								<Box>
									<Box>Full Name</Box>
									<Box>
										<input
											type='text'
											className='form-control'
											placeholder='Ashok kumar das'
										/>
									</Box>
								</Box>
								<Box mt={1}>
									<Box>Email</Box>
									<Box>
										<input
											type='text'
											className='form-control'
											placeholder='kumaratul1560254@gmail.com'
										/>
									</Box>
								</Box>

								<Box mt={1}>
									<Box>Phone</Box>
									<Box>
										<input
											type='text'
											className='form-control'
											placeholder='98745212585'
										/>
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

export default MobProfile;
