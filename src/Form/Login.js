import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import referal from '../Assets/Image/referal.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	// Define state for form fields
	const [formData, setFormData] = useState({
		choice_id: '',
		password: '',
	});

	// Define state for error message and loading status
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	// Handle input changes
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		navigate('/dashboard');
		// e.preventDefault();
		// setLoading(true);
		// try {
		// 	const response = await axios.post(
		// 		'http://localhost:8080/api/v1/user/login',
		// 		formData
		// 	);
		// 	setLoading(false);
		// 	if (response.data.success) {
		// 		alert('Login successful!');
		// 		navigate('/dashboard');
		// 	} else {
		// 		setError(response.data.message);
		// 	}
		// } catch (error) {
		// 	setLoading(false);
		// 	setError('Login failed. Please try again.');
		// }
	};

	return (
		<>
			<Grid
				container
				style={{
					backgroundImage: 'linear-gradient(to left, #0f3a49, #ebebeb)',
					height: '100vh',
				}}>
				<Grid item lg={10} md={10} sm={10} xs={11} mx='auto'>
					<Box
						style={{
							background: 'white',
							width: '100%',
							padding: '40px',
							borderRadius: '20px',
							boxShadow: '0 0 5px',
							marginTop: '100px',
							height: '600px',
						}}>
						<Box mt={2} style={{ textAlign: 'center' }}>
							<img
								src={referal}
								style={{ width: '80px', height: '50px' }}
								alt=''
							/>
						</Box>
						<Box style={{ textAlign: 'center' }}>
							<Box
								style={{
									fontWeight: 'bold',
									fontSize: '32px',
									marginTop: '20px',
								}}>
								Sign In
							</Box>
							<Box mt={2} style={{ fontWeight: '500' }}>
								Login to your loan panel
							</Box>
						</Box>
						{/* Form for login */}
						<form onSubmit={handleSubmit}>
							<Box mt={3}>
								<input
									style={{ background: '#ebebeb', height: '45px' }}
									type='text'
									className='form-control'
									placeholder='User Id'
									name='choice_id'
									value={formData.choice_id}
									onChange={handleChange}
								/>
							</Box>
							<Box mt={2}>
								<input
									style={{ background: '#ebebeb', height: '45px' }}
									type='password'
									className='form-control'
									placeholder='Password'
									name='password'
									value={formData.password}
									onChange={handleChange}
								/>
							</Box>

							{/* Submit button */}
							<Box mt={5} style={{ display: 'flex', justifyContent: 'center' }}>
								<Box>
									<button
										type='submit'
										style={{
											backgroundImage:
												'linear-gradient(to right, #0f3a49, #082738)',
											color: 'white',
											padding: '10px 30px',
										}}
										className='form-control'
										disabled={loading}>
										{loading ? 'Submitting...' : 'Submit'}
									</button>
								</Box>
							</Box>

							{/* Error message display */}
							{error && (
								<Box mt={2} style={{ textAlign: 'center', color: 'red' }}>
									{error}
								</Box>
							)}
						</form>

						<Box style={{ textAlign: 'center' }} mt={1.5}>
							Forget password?
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Login;
