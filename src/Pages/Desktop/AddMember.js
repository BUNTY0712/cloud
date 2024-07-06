import { Box, Grid } from '@mui/material';
import React from 'react';

const AddMember = () => {
	return (
		<>
			<Grid container>
				<Grid item lg={3.6} mx='auto'>
					<Box
						style={{
							background: '#ebebeb',
							padding: '25px',
							textAlign: 'center',
							marginTop: '40px',
							borderRadius: '2px',
							border: '1px solid rgb(205 205 205)',
						}}>
						<Box>Logo</Box>
						<Box
							style={{
								color: '#0c2139',
								fontSize: '40px',
								fontWeight: 'bold',
							}}>
							Sign Up{' '}
						</Box>

						{/* Sponsor Id  */}
						<Box mt={4}>
							<input
								style={{ fontSize: '19px' }}
								placeholder='Sponsor Id'
								type='text'
								className='form-control'
							/>
						</Box>

						{/* Choice Id  */}
						<Box mt={2}>
							<input
								style={{ fontSize: '19px' }}
								placeholder='Choice Id'
								type='text'
								className='form-control'
							/>
						</Box>

						<Box mt={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<Box style={{ marginRight: '65px' }} mr={5}>
								<input type='radio' />
							</Box>
							<Box style={{ marginRight: '115px' }} mr={5}>
								<input type='radio' />
							</Box>
							<Box></Box>
						</Box>

						<Box mt={2}>
							<input
								style={{ fontSize: '19px' }}
								placeholder='Full Name'
								type='text'
								className='form-control'
							/>
						</Box>

						<Box mt={2} style={{ display: 'flex' }}>
							<Box style={{ width: '30%' }}>
								<select
									style={{ fontSize: '19px' }}
									className='form-control'
									placeholder='India +91'
									name='countryCode'
									id='countryCode'>
									<option value='DE'>Germany +49</option>
									<option value='GH'>Ghana +233</option>
									<option value='IN' selected>
										India +91
									</option>
								</select>
							</Box>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<Box mx='auto' style={{ width: '65%' }}>
								<input
									style={{ fontSize: '19px' }}
									className='form-control'
									type='number'
									placeholder='Mobile'
									name='mobile'
									id='mobile'
								/>
							</Box>
						</Box>

						<Box mt={2}>
							<input
								style={{ fontSize: '19px' }}
								placeholder='EmailId'
								type='text'
								className='form-control'
							/>
						</Box>

						<Box mt={2}>
							<input
								style={{ fontSize: '19px' }}
								placeholder='City'
								type='text'
								className='form-control'
							/>
						</Box>

						<Box mt={2}>
							<input
								style={{ fontSize: '19px' }}
								placeholder='Password'
								type='text'
								className='form-control'
							/>
						</Box>

						<Box mt={2}>
							<input
								style={{ fontSize: '19px' }}
								placeholder='Confirm Password'
								type='text'
								className='form-control'
							/>
						</Box>

						<Box mt={3} style={{ display: 'flex', justifyContent: 'center' }}>
							<Box
								style={{
									background: '#dc3545',
									padding: '0px 80px',
									paddingTop: '4px',
									paddingBottom: '10px',

									color: 'white',
									// fontWeight: 'bold',
									fontSize: '19px',
									borderRadius: '4px',
								}}>
								Sign Up
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default AddMember;
