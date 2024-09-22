import React from 'react';
import { Box, Grid } from '@mui/material';
import { RiSkipRightLine, RiArrowLeftLine } from 'react-icons/ri'; // Corrected icon import
import { BiArrowToLeft } from 'react-icons/bi';
import { IoIosArrowDropup } from 'react-icons/io';

import { FaUser } from 'react-icons/fa';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';

const MobTree = () => {
	return (
		<>
			<Grid container>
				<Grid item lg={10} md={11} xs={12} sm={12}>
					<MobileUpperMenu />

					<Box
						style={{
							// boxShadow: '0 0 2px',
							margin: '20px',
							padding: '0px',
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Box
							style={{
								width: '40%',
								border: '1px solid green',
								padding: '8px 22px',
								fontSize: '14px',
								color: 'green',
								display: 'flex',
								alignItems: 'center', // Corrected alignItems
							}}>
							<Box mr={1}>
								<BiArrowToLeft /> {/* Corrected the icon */}
							</Box>
							<Box>FIRST LEVEL</Box>
						</Box>
						{/* input box */}
						<Box style={{ width: '40%' }}>
							<input
								className='form-control'
								// style={{ padding: '6px 8px' }}
								placeholder='Username'
								type='text'
							/>
						</Box>
						{/* search  */}
						<Box
							style={{
								background: '#3fa7d6',
								padding: '5px 12px',
								color: 'white',
							}}>
							Search
						</Box>
					</Box>
					<Box ml={2.5} style={{ display: 'flex' }}>
						<Box
							style={{
								border: '1px solid green',
								padding: '8px 11px',
								fontSize: '14px',
								color: 'green',
								display: 'flex',
								alignItems: 'center', // Corrected alignItems
							}}>
							<Box mr={1}>
								<IoIosArrowDropup />
							</Box>
							<Box>PREVIOUS LEVEL</Box>
						</Box>
					</Box>

					<Box style={{ display: 'flex', justifyContent: 'center' }}>
						<Box style={{ fontSize: '45px' }}>
							<FaUser style={{ color: '#0cae1e' }} />
						</Box>
					</Box>
					<Box style={{ textAlign: 'center' }}>Ibrar</Box>

					<Box mt={2} style={{ display: 'flex' }}>
						<Box
							style={{
								// border: '1px solid grey',
								width: '20%',
								// justifyContent: 'center',
							}}></Box>

						<Box
							style={{
								borderTop: '1px solid grey',
								width: '60%',
								// justifyContent: 'center',
							}}>
							<Box>
								<Box
									style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box>
										<Box style={{ fontSize: '45px' }}>
											<FaUser style={{ color: '#0cae1e' }} />
										</Box>
										<Box style={{ textAlign: 'center' }}>Ibrar</Box>
									</Box>

									<Box>
										<Box style={{ fontSize: '45px' }}>
											<FaUser style={{ color: '#0cae1e' }} />
										</Box>
										<Box style={{ textAlign: 'center' }}>Ibrar</Box>
									</Box>
								</Box>
							</Box>
						</Box>

						<Box
							style={{
								// border: '1px solid red',
								width: '20%',
								// justifyContent: 'center',
							}}></Box>
					</Box>

					{/* last Box  */}

					<Box style={{ display: 'flex' }}>
						<Box style={{ width: '50%' }}>
							<Box>
								<Box mt={2} style={{ display: 'flex' }}>
									<Box
										style={{
											// border: '1px solid grey',
											width: '15%',
											// justifyContent: 'center',
										}}></Box>

									<Box
										style={{
											borderTop: '1px solid grey',
											width: '60%',
											// justifyContent: 'center',
										}}>
										<Box>
											<Box
												style={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Box style={{ fontSize: '45px' }}>
														<FaUser style={{ color: '#0cae1e' }} />
													</Box>
													<Box style={{ textAlign: 'center' }}>Ibrar</Box>
												</Box>

												<Box>
													<Box style={{ fontSize: '45px' }}>
														<FaUser style={{ color: '#0cae1e' }} />
													</Box>
													<Box style={{ textAlign: 'center' }}>Ibrar</Box>
												</Box>
											</Box>
										</Box>
									</Box>

									<Box
										style={{
											// border: '1px solid red',
											width: '15%',
											// justifyContent: 'center',
										}}></Box>
								</Box>
							</Box>
						</Box>

						<Box style={{ width: '50%' }}>
							<Box>
								<Box mt={2} style={{ display: 'flex' }}>
									<Box
										style={{
											// border: '1px solid grey',
											width: '30%',
											// justifyContent: 'center',
										}}></Box>

									<Box
										style={{
											borderTop: '1px solid grey',
											width: '60%',
											// justifyContent: 'center',
										}}>
										<Box>
											<Box
												style={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Box style={{ fontSize: '45px' }}>
														<FaUser style={{ color: '#0cae1e' }} />
													</Box>
													<Box style={{ textAlign: 'center' }}>Ibrar</Box>
												</Box>

												<Box>
													<Box style={{ fontSize: '45px' }}>
														<FaUser style={{ color: '#0cae1e' }} />
													</Box>
													<Box style={{ textAlign: 'center' }}>Ibrar</Box>
												</Box>
											</Box>
										</Box>
									</Box>

									<Box
										style={{
											// border: '1px solid red',
											width: '15%',
											// justifyContent: 'center',
										}}></Box>
								</Box>
							</Box>
						</Box>
					</Box>

					<Grid container>
						<Grid item lg={6} sm={11} xs={11} mx='auto'>
							<Box mt={2}>
								<Box
									style={{
										background: '#e3edff',
										padding: '18px',
										borderRadius: '5px',
									}}>
									Tree Color
								</Box>
								<Box></Box>
							</Box>
							<Box
								style={{
									border: '1px solid #e9ebec',
									padding: '30px',
									display: 'block',
								}}>
								<Box mr={5} style={{ display: 'flex' }}>
									<Box>
										<FaUser style={{ color: '#816b24', fontSize: '25px' }} />
									</Box>
									<Box ml={1.3} mt={1}>
										<Box>In Active</Box>
									</Box>
								</Box>

								<Box mt={2} mr={5} style={{ display: 'flex' }}>
									<Box>
										<FaUser style={{ color: '#0cae1e', fontSize: '25px' }} />
									</Box>
									<Box ml={1.3} mt={1}>
										<Box>Activate [Topup]</Box>
									</Box>
								</Box>

								<Box mt={2} style={{ display: 'flex' }}>
									<Box>
										<FaUser style={{ color: '#ee6352', fontSize: '25px' }} />
									</Box>
									<Box ml={1.3} mt={1}>
										<Box>Vacant</Box>
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

export default MobTree;
