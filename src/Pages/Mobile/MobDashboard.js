import { Box } from '@mui/material';
import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { BiTimer } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineContactMail } from 'react-icons/md';
import { BiGroup } from 'react-icons/bi';
import { MdCurrencyRupee } from 'react-icons/md';
import { FaWallet } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const MobDashboard = () => {
	return (
		<>
			<Box
				style={{
					background: '#192072',
					color: 'white',
					padding: '15px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Box style={{ fontSize: '30px' }}>
					<RiMenu2Line />
				</Box>
				<Box>
					<h3>Logo</h3>
				</Box>
			</Box>
			<Box
				mt={2}
				style={{
					// display: 'flex',
					// justifyContent: 'space-between',
					padding: '0px 20px',
				}}>
				<Box style={{ fontWeight: 'bold', fontSize: '20px' }}>Dashboard</Box>
			</Box>
			<Box ml={2.5} style={{ display: 'flex' }}>
				<Box>Dashboard</Box>

				<Box ml={1}>
					<MdKeyboardArrowRight />
				</Box>
				<Box ml={1}>Statistics</Box>
			</Box>
			{/* marquee */}
			<Box mt={2} style={{ padding: '10px', background: '#ecf3ff' }}>
				<marquee style={{ fontSize: '18px', fontWeight: '600' }}>
					Welcome to Referral Nexus.
				</marquee>
			</Box>

			<Box style={{ padding: '15px' }}>
				<Box
					mt={2}
					style={{
						border: '1.5px solid #e9ebec',
						margin: '2px',
					}}>
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
							// boxShadow: '0px 0px 2px',
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
				{/* Complete your KYC to make INR deposits */}
				<Box
					mt={2}
					style={{
						background: '#fff7e6',
						padding: '8px',
						border: '1px solid #ffedc7',
					}}>
					<Box style={{ display: 'flex', alignItems: 'center' }}>
						<Box ml={2} style={{ fontSize: '18px', fontWeight: '600' }}>
							<span mt={0.5}>
								<MdOutlineContactMail
									style={{
										fontSize: '18px',
										color: '#ee6352',
										marginRight: '15px',
									}}
								/>
							</span>{' '}
							<span style={{ fontSize: '20px' }}>
								Complete your KYC to make INR deposits{' '}
							</span>
							<span
								ml={2}
								style={{
									background: '#ffca5b',
									color: 'black',
									padding: '5px 10px',
									fontSize: '12px',
									fontWeight: '500',
									borderRadius: '5px',
									cursor: 'pointer', // Added cursor to indicate it's a button
									marginLeft: '15px',
								}}>
								Verify
							</span>
						</Box>
					</Box>
				</Box>
				{/* Activation  */}
				<Box mt={2} style={{ padding: '15px', border: '2px solid #e9ebec' }}>
					<Box>
						<Box style={{}}>Status</Box>
						<Box style={{ fontSize: '25px', fontWeight: '600' }}>Activated</Box>
					</Box>
					<Box ml={3} style={{ fontSize: '12px' }}>
						Join on : 23-12-23 12:49:24
					</Box>
					<Box mt={1} style={{ fontSize: '13px', color: '#40bb82' }}>
						Active On : 06-04-24 21:32:31
					</Box>
				</Box>
				{/* Direct  */}
				<Box
					mt={2}
					style={{
						padding: '18px',
						border: '2px solid #e9ebec',
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<Box>
						<Box style={{ fontWeight: '500' }}>Direct</Box>
						<Box mt={1} style={{ display: 'flex' }}>
							<Box style={{ fontSize: '25px', fontWeight: 'bold' }}>2</Box>
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
							<BiGroup style={{ fontSize: '35px', color: '#4788ff' }} />
						</Box>
					</Box>
				</Box>
				{/* fund wallet  */}
				<Box
					mt={2}
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
								<Box style={{ color: '#40bb82', fontWeight: '500' }}>
									Fund Wallet
								</Box>
								<Box style={{ fontSize: '30px', fontWeight: '600' }}>0</Box>
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
				{/* wallet  */}
				<Box
					mt={2}
					style={{
						padding: '15px',
						border: '2px solid #e9ebec',
						background: '#e3edff',
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<Box>
						<Box>
							<Box style={{ color: '#4788ff', fontWeight: '500' }}>Wallet</Box>
							<Box style={{ fontSize: '30px', fontWeight: 'bold' }}>-550</Box>
						</Box>

						<Box style={{ display: 'flex' }}>
							<Box
								mt={0.4}
								style={{
									background: '#4788ff',
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
						<FaWallet style={{ fontSize: '30px', color: '#4788ff' }} />
					</Box>
				</Box>
				{/* Activation Wallet  */}
				<Box
					mt={2}
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
								<Box style={{ color: '#878a99', fontWeight: '500' }}>
									Activation Wallet
								</Box>
								<Box style={{ fontSize: '30px', fontWeight: '600' }}>0</Box>
							</Box>
							<Box style={{ display: 'flex' }}>
								<Box
									mt={0.4}
									style={{
										background: '#4788ff',
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

				{/* Withdrawal */}
				<Box
					mt={2}
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
								<Box style={{ color: '#ee6352', fontWeight: '500' }}>
									Withdrawal
								</Box>
								<Box style={{ fontSize: '30px', fontWeight: '600' }}>0</Box>
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
			</Box>
		</>
	);
};

export default MobDashboard;
