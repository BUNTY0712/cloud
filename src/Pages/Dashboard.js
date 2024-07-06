import { Box, Grid, colors } from '@mui/material';
import React from 'react';
import RightNavbar from '../ReusableComnent/RightNavbar';
import { HiMenuAlt2 } from 'react-icons/hi';
import { CiMenuFries } from 'react-icons/ci';
import { RiMenu2Line } from 'react-icons/ri';
import { BiFontFamily, BiTimer } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineContactMail } from 'react-icons/md';
import { BiSolidGroup } from 'react-icons/bi';
import { BiGroup } from 'react-icons/bi';
import { FaWallet } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { FiUpload } from 'react-icons/fi';
import { TbCircleArrowDownLeftFilled } from 'react-icons/tb';
import { PiCopySimpleLight } from 'react-icons/pi';
import { BsArrowDownRightCircleFill } from 'react-icons/bs';
import UpperMenu from './Desktop/ResuableComponent.js/UpperMenu';
const Dashboard = () => {
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
							Welcome to Referral Nexus.
						</marquee>
					</Box>

					<Grid container>
						<Grid style={{ marginTop: '15px' }} item lg={2.5}>
							<Box style={{ boxShadow: '0px 0px 2px', paddingBottom: '45px' }}>
								<Box
									style={{
										background: '#e2f5ec',
										display: 'flex',
										padding: '18px 20px',
										justifyContent: 'space-between',
										color: '#40bb82',
										fontWeight: 'bold',
										alignItems: 'center',
										borderBottom: '1px solid #40bb82',
									}}>
									<Box style={{ fontSize: '18px' }}>
										<BiTimer />
									</Box>
									<Box>Active Loans & EWI</Box>
									<Box
										style={{
											background: '#40bb82',
											color: 'white',
											padding: '7px 10px',
											fontSize: '12px',
											fontWeight: '500',
											borderRadius: '5px',
										}}>
										Details
									</Box>
								</Box>

								{/* loan  */}
								<Box>
									<Box
										style={{
											background: '#f3f6f9',
											padding: '8px 15px',
											margin: '15px',
											fontWeight: '600',
										}}>
										Loan: 2250
									</Box>
								</Box>

								{/* Data  */}
								<Box
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginLeft: '15px',
										marginRight: '100px',
									}}>
									<Box>450</Box>
									<Box mr={3} style={{ color: '#4788ff' }}>
										14-05-24
									</Box>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#40bb82',
										}}>
										<Box mr={0.2}>
											<TiTick style={{ marginBottom: '3px' }} />
										</Box>
										<Box style={{}} ml={0.5}>
											Paid
										</Box>
									</Box>
								</Box>

								{/* Data  */}
								<Box
									mt={1}
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginLeft: '15px',
										marginRight: '100px',
									}}>
									<Box>450</Box>
									<Box mr={3} style={{ color: '#4788ff' }}>
										14-05-24
									</Box>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#40bb82',
										}}>
										<Box mr={0.2}>
											<TiTick style={{ marginBottom: '3px' }} />
										</Box>
										<Box style={{}} ml={0.5}>
											Paid
										</Box>
									</Box>
								</Box>

								{/* Data  */}
								<Box
									mt={1}
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginLeft: '15px',
										marginRight: '100px',
									}}>
									<Box>450</Box>
									<Box mr={3} style={{ color: '#4788ff' }}>
										14-05-24
									</Box>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#40bb82',
										}}>
										<Box mr={0.2}>
											<TiTick style={{ marginBottom: '3px' }} />
										</Box>
										<Box style={{}} ml={0.5}>
											Paid
										</Box>
									</Box>
								</Box>

								{/* loan  */}
								<Box>
									<Box
										style={{
											background: '#f3f6f9',
											padding: '8px 15px',
											margin: '15px',
											fontWeight: '600',
										}}>
										Loan: 2250
									</Box>
								</Box>

								{/* Data  */}
								<Box
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginLeft: '15px',
										marginRight: '100px',
									}}>
									<Box>450</Box>
									<Box mr={3} style={{ color: '#4788ff' }}>
										14-05-24
									</Box>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#40bb82',
										}}>
										<Box mr={0.2}>
											<TiTick style={{ marginBottom: '3px' }} />
										</Box>
										<Box style={{}} ml={0.5}>
											Paid
										</Box>
									</Box>
								</Box>

								{/* Data  */}
								<Box
									mt={1}
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginLeft: '15px',
										marginRight: '100px',
									}}>
									<Box>450</Box>
									<Box mr={3} style={{ color: '#4788ff' }}>
										14-05-24
									</Box>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#40bb82',
										}}>
										<Box mr={0.2}>
											<TiTick style={{ marginBottom: '3px' }} />
										</Box>
										<Box style={{}} ml={0.5}>
											Paid
										</Box>
									</Box>
								</Box>

								{/* Data  */}
								<Box
									mt={1}
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginLeft: '15px',
										marginRight: '100px',
									}}>
									<Box>450</Box>
									<Box mr={3} style={{ color: '#4788ff' }}>
										14-05-24
									</Box>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#40bb82',
										}}>
										<Box mr={0.2}>
											<TiTick style={{ marginBottom: '3px' }} />
										</Box>
										<Box style={{}} ml={0.5}>
											Paid
										</Box>
									</Box>
								</Box>

								{/* Data unpaid palanty */}
								<Box
									mt={1}
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginLeft: '15px',
										marginRight: '25px',
									}}>
									<Box>450</Box>
									<Box mr={2} style={{ color: '#4788ff' }}>
										14-05-24
									</Box>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#ee6352',
										}}>
										<Box mr={0.2}>
											<RxCross2 style={{ marginBottom: '3px' }} />
										</Box>
										<Box style={{}} ml={0.5}>
											UnPaid
										</Box>

										<Box style={{ color: 'black' }} ml={0.5}>
											&nbsp; Penalty
										</Box>
									</Box>
								</Box>

								{/* Data unpaid */}
								<Box
									mt={1}
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										marginLeft: '15px',
										marginRight: '89px',
									}}>
									<Box>450</Box>
									<Box mr={2} style={{ color: '#4788ff' }}>
										14-05-24
									</Box>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											color: '#ee6352',
										}}>
										<Box mr={0.2}>
											<RxCross2 style={{ marginBottom: '3px' }} />
										</Box>
										<Box style={{}} ml={0.5}>
											UnPaid
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>

						<Grid style={{}} item lg={9} mx='auto'>
							<Box>
								<Box
									mt={2}
									style={{ background: '#fff7e6', padding: '20px 20px' }}>
									<Box style={{ display: 'flex' }}>
										<Box mt={0.5}>
											<MdOutlineContactMail
												style={{ fontSize: '22px', color: '#ee6352' }}
											/>
										</Box>

										<Box ml={4} style={{ fontSize: '22px', fontWeight: '600' }}>
											{' '}
											Complete your KYC to make INR deposits
										</Box>
										<Box
											ml={4}
											style={{
												background: '#ffca5b',
												color: 'black',
												padding: '7px 10px',
												fontSize: '12px',
												fontWeight: '500',
												borderRadius: '5px',
											}}>
											Verify
										</Box>
									</Box>
								</Box>

								<Grid style={{ marginTop: '12px' }} container>
									<Grid item lg={3.9} mx='auto'>
										<Box
											style={{ padding: '15px', border: '2px solid #e9ebec' }}>
											<Box>
												<Box style={{}}>Status</Box>
												<Box style={{ fontSize: '25px', fontWeight: '600' }}>
													Activated
												</Box>
											</Box>
											<Box ml={3} style={{ fontSize: '12px' }}>
												Join on : 23-12-23 12:49:24
											</Box>
											<Box
												mt={1}
												style={{ fontSize: '13px', color: '#40bb82' }}>
												Active On : 06-04-24 21:32:31
											</Box>
										</Box>
									</Grid>
									<Grid item lg={3.9} mx='auto'>
										<Box
											style={{
												padding: '18px',
												border: '2px solid #e9ebec',
												display: 'flex',
												justifyContent: 'space-between',
											}}>
											<Box>
												<Box style={{ fontWeight: '500' }}>Direct</Box>
												<Box mt={1} style={{ display: 'flex' }}>
													<Box style={{ fontSize: '25px', fontWeight: 'bold' }}>
														2
													</Box>
													<Box>
														<Box
															ml={2}
															mt={0.4}
															style={{
																// background: '#40bb82',
																color: '#3fa7d6',
																padding: '5px 10px',
																fontSize: '13px',
																fontWeight: '500',
																borderRadius: '3px',
																border: '1px solid #3fa7d6',
															}}>
															View
														</Box>
													</Box>
												</Box>
											</Box>

											<Box>
												<Box
													style={{
														background: '#e3edff',
														padding: '12px 12px',
														borderRadius: '48px',
													}}>
													<BiGroup
														style={{ fontSize: '35px', color: '#4788ff' }}
													/>
												</Box>
											</Box>
										</Box>
									</Grid>
									<Grid item lg={3.9} mx='auto'>
										<Box
											style={{
												padding: '15px',
												background: '#e2f5ec',
												border: '2px solid #e9ebec',
											}}>
											<Box
												style={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Box>
														<Box
															style={{ color: '#40bb82', fontWeight: '500' }}>
															Fund Wallet
														</Box>
														<Box
															style={{ fontSize: '30px', fontWeight: '600' }}>
															0
														</Box>
													</Box>
													<Box style={{ display: 'flex' }}>
														<Box
															mt={0.4}
															style={{
																background: '#40bb82',
																color: 'white',
																padding: '7px 10px',
																fontSize: '12px',
																fontWeight: '500',
																borderRadius: '3px',
															}}>
															View
														</Box>
													</Box>
												</Box>
												<Box style={{ fontSize: '30px', color: '#40bb82' }}>
													<MdCurrencyRupee />
												</Box>
											</Box>
										</Box>
									</Grid>
								</Grid>

								{/* 2nd row  */}
								<Grid style={{ marginTop: '12px' }} container>
									<Grid item lg={3.9} mx='auto'>
										<Box
											style={{
												padding: '15px',
												border: '2px solid #e9ebec',
												background: '#e3edff',
												display: 'flex',
												justifyContent: 'space-between',
											}}>
											<Box>
												<Box>
													<Box style={{ color: '#4788ff', fontWeight: '500' }}>
														Wallet
													</Box>
													<Box style={{ fontSize: '30px', fontWeight: 'bold' }}>
														-550
													</Box>
												</Box>

												<Box style={{ display: 'flex' }}>
													<Box
														mt={0.4}
														style={{
															background: '#40bb82',
															color: 'white',
															padding: '7px 12px',
															fontSize: '12px',
															fontWeight: '500',
															borderRadius: '3px',
														}}>
														View
													</Box>
												</Box>
											</Box>
											<Box>
												<FaWallet
													style={{ fontSize: '30px', color: '#4788ff' }}
												/>
											</Box>
										</Box>
									</Grid>
									<Grid item lg={3.9} mx='auto'>
										<Box
											style={{
												padding: '15px',
												background: '#e2f5ec',
												border: '2px solid #e9ebec',
											}}>
											<Box
												style={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Box>
														<Box
															style={{ color: '#40bb82', fontWeight: '500' }}>
															Activation Wallet
														</Box>
														<Box
															style={{ fontSize: '30px', fontWeight: '600' }}>
															0
														</Box>
													</Box>
													<Box style={{ display: 'flex' }}>
														<Box
															mt={0.4}
															style={{
																background: '#40bb82',
																color: 'white',
																padding: '7px 10px',
																fontSize: '12px',
																fontWeight: '500',
																borderRadius: '3px',
															}}>
															View
														</Box>
													</Box>
												</Box>
												<Box style={{ fontSize: '30px', color: '#40bb82' }}>
													<MdCurrencyRupee />
												</Box>
											</Box>
										</Box>
									</Grid>
									<Grid item lg={3.9} mx='auto'>
										<Box
											style={{
												padding: '15px',
												background: '#fce8e5',
												border: '2px solid #e9ebec',
											}}>
											<Box
												style={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Box>
														<Box
															style={{ color: '#ee6352', fontWeight: '500' }}>
															Withdrawal
														</Box>
														<Box
															style={{ fontSize: '30px', fontWeight: '600' }}>
															0
														</Box>
													</Box>
													<Box style={{ display: 'flex' }}>
														<Box
															mt={0.4}
															style={{
																background: '#ee6352',
																color: 'white',
																padding: '7px 10px',
																fontSize: '12px',
																fontWeight: '500',
																borderRadius: '3px',
															}}>
															View
														</Box>
													</Box>
												</Box>
												<Box style={{ fontSize: '30px', color: '#ee6352' }}>
													<FiUpload />
												</Box>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>

							{/* end section  */}
							<Box
								mt={2}
								style={{ padding: '15px', border: '1px solid #e9ebec' }}>
								<Grid container>
									<Grid item lg={6}>
										<Box style={{ display: 'flex' }}>
											<Box style={{ fontSize: '18px', fontWeight: '500' }}>
												Profile & Referral Link
											</Box>
											<Box
												ml={1}
												style={{ color: '#ee6352', fontSize: '20px' }}>
												<TbCircleArrowDownLeftFilled />
											</Box>
											<Box
												ml={1}
												style={{
													color: '#ee6352',
													fontSize: '18px',
													fontWeight: '500',
												}}>
												[ Left ]
											</Box>
										</Box>

										<Box
											style={{
												display: 'flex',
												alignItems: 'center',
											}}>
											<Box style={{ color: 'blue' }}>
												https://cloudtechno.biz/sign-up/Ibrar/Left{' '}
											</Box>

											<Box
												ml={1}
												style={{ background: '#4788ff', padding: '5px 8px' }}>
												<Box>
													<PiCopySimpleLight
														style={{ color: 'white', fontSize: '15px' }}
													/>
												</Box>
											</Box>
										</Box>

										<Box
											style={{
												fontWeight: '600',
												fontSize: '19px',
												color: '#495057',
											}}
											mt={2}>
											Share above link to join members under downline.
										</Box>
									</Grid>

									<Grid item lg={6}>
										<Box style={{ display: 'flex' }}>
											<Box style={{ fontSize: '18px', fontWeight: '500' }}>
												Profile & Referral Link
											</Box>
											<Box>
												<Box
													ml={1}
													style={{
														color: '#ee6352',
														fontSize: '20px',
														marginTop: '-2px',
													}}>
													<BsArrowDownRightCircleFill />
												</Box>
											</Box>
											<Box
												ml={1}
												style={{
													color: '#ee6352',
													fontSize: '18px',
													fontWeight: '500',
												}}>
												[ Right ]
											</Box>
										</Box>

										<Box
											style={{
												display: 'flex',
												alignItems: 'center',
											}}>
											<Box style={{ color: 'blue' }}>
												https://cloudtechno.biz/sign-up/Ibrar/Left{' '}
											</Box>

											<Box
												ml={1}
												style={{ background: '#4788ff', padding: '5px 8px' }}>
												<Box>
													<PiCopySimpleLight
														style={{ color: 'white', fontSize: '15px' }}
													/>
												</Box>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
