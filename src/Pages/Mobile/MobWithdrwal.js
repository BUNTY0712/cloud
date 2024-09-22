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
import { BsCurrencyRupee } from 'react-icons/bs';
import { RiShieldUserLine } from 'react-icons/ri';
import { CiCircleList } from 'react-icons/ci';
// import { GoAlertFill } from 'react-icons/go';
import { RiAlertFill } from 'react-icons/ri';
import { TbArrowsExchange } from 'react-icons/tb';
import { BiBorderBottom, BiSolidBank } from 'react-icons/bi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';
import { backdropClasses } from '@mui/material';

const MobWithdrwal = () => {
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
							withdrawal
						</Box>
					</Box>
					<Box
						mt={0.5}
						style={{
							display: 'flex',
							padding: '0px 20px',
							borderBottom: '1px sloid grey',
						}}>
						<Box>Payout Wallet</Box>
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
											<BsCurrencyRupee style={{ fontSize: '18px' }} />
										</Box>
										<Box
											ml={1}
											style={{
												fontSize: '17px',
												fontWeight: 'bold',
												color: '#375771',
											}}>
											Withdraw to bank account directly [IMPS]
										</Box>
									</Box>
								</Box>

								<Box></Box>

								{/* Fund Transfer  */}
								<Box mt={3} style={{ padding: '18px' }}>
									<Box
										style={{
											background: '#e1f2f9',
											padding: '15px',
											color: '#4e65dc',
											fontWeight: '600',
											fontSize: '18px',
											textAlign: 'center',
										}}>
										Note: Minimum 500 & Max 5000.
									</Box>

									<Box style={{ fontWeight: '600' }} mt={1.5}>
										Wallet Balance
										<Box>-50.00 INR</Box>
									</Box>

									<Box style={{ fontWeight: '600' }} mt={1.5}>
										Transaction Mode
										<Box style={{ fontWeight: 'bold' }}>BEP 20 USDT</Box>
									</Box>

									<Box style={{ fontWeight: '600' }} mt={1.5}>
										Withdraw Amount
										<Box style={{ fontSize: '14px' }}>Multiple of 100</Box>
									</Box>

									<Box style={{ fontWeight: '600' }} mt={1.5}>
										Transaction
									</Box>
									<hr />

									<Box style={{ background: '#fef7e5', padding: '15px' }}>
										<Box style={{ fontSize: '18px', textAlign: 'center' }}>
											<span style={{ fontWeight: 'bold', color: '#fcd57a' }}>
												Warning! &nbsp;
											</span>
											<span style={{ fontWeight: '600' }}>
												Add bank account first to withdraw your balance!
											</span>
											<Box
												style={{
													display: 'flex',
													justifyContent: 'center',
													color: 'white',
												}}>
												<Box
													style={{
														marginTop: '10px',
														background: '#8d67cc',
														padding: '8px 12px',
														borderRadius: '4px',
														fontSize: '16px',
													}}>
													Add Bank
												</Box>
											</Box>
										</Box>
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

export default MobWithdrwal;
