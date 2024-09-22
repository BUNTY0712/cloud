import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import MobileUpperMenu from '../Pages/Mobile/ResuableComponent/MobileUpperMenu';

const Sign = () => {
	// Define state for each form field
	const [formData, setFormData] = useState({
		sponsor_id: '',
		choice_id: '',
		position: 'Left',
		fullname: '',
		phone: '',
		country: 'India',
		email: '',
		city: '',
		password: '',
		confirm_password: '',
	});

	// Handle input change for form fields
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				'http://localhost:8080/api/v1/user/resgister',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);

			const result = await response.json();

			if (response.ok) {
				alert('User registered successfully');
			} else {
				alert(`Error: ${result.message}`);
			}
		} catch (error) {
			alert(`Error: ${error.message}`);
		}
	};

	return (
		<>
			<MobileUpperMenu />
			<Grid container>
				<Grid item lg={10} md={10} sm={11} xs={11} mx='auto'>
					<Box
						mt={5}
						style={{ background: '#ebebeb', width: '100%', padding: '20px' }}>
						<Box>
							<img src='' alt='' />
						</Box>
						<Box style={{ textAlign: 'center' }}>
							<h1>Sign Up</h1>
						</Box>
						<form onSubmit={handleSubmit}>
							<Box>
								<input
									type='text'
									className='form-control'
									placeholder='Sponsor Id'
									name='sponsor_id'
									value={formData.sponsor_id}
									onChange={handleChange}
								/>
							</Box>
							{/* Choice */}
							<Box mt={2}>
								<input
									type='text'
									className='form-control'
									placeholder='Choice Id'
									name='choice_id'
									value={formData.choice_id}
									onChange={handleChange}
								/>
							</Box>
							{/* Position */}
							<Box mt={2} style={{ textAlign: 'center' }}>
								Position: Left{' '}
								<span>
									<input
										type='radio'
										name='position'
										value='Left'
										checked={formData.position === 'Left'}
										onChange={handleChange}
									/>
								</span>
								&nbsp;&nbsp; Right{' '}
								<span>
									<input
										type='radio'
										name='position'
										value='Right'
										checked={formData.position === 'Right'}
										onChange={handleChange}
									/>
								</span>
							</Box>
							{/* Full name */}
							<Box mt={2}>
								<input
									type='text'
									className='form-control'
									placeholder='Full Name'
									name='fullname'
									value={formData.fullname}
									onChange={handleChange}
								/>
							</Box>
							{/* Phone */}
							<Box mt={2} style={{ display: 'flex', alignItems: 'center' }}>
								<Box style={{ width: '20%' }}>
									<select
										className='form-control'
										name='country'
										value={formData.country}
										onChange={handleChange}>
										<option value='India'>India</option>
										<option value='Us'>US</option>
									</select>
								</Box>
								<Box style={{ width: '10%' }}></Box>
								<Box style={{ width: '70%' }}>
									<input
										type='text'
										className='form-control'
										placeholder='Mobile'
										name='phone'
										value={formData.phone}
										onChange={handleChange}
									/>
								</Box>
							</Box>
							{/* Email */}
							<Box mt={2}>
								<input
									type='text'
									className='form-control'
									placeholder='Email'
									name='email'
									value={formData.email}
									onChange={handleChange}
								/>
							</Box>
							{/* City */}
							<Box mt={2}>
								<input
									type='text'
									className='form-control'
									placeholder='City'
									name='city'
									value={formData.city}
									onChange={handleChange}
								/>
							</Box>
							{/* Password */}
							<Box mt={2}>
								<input
									type='password'
									className='form-control'
									placeholder='Password'
									name='password'
									value={formData.password}
									onChange={handleChange}
								/>
							</Box>
							{/* Confirm Password */}
							<Box mt={2}>
								<input
									type='password'
									className='form-control'
									placeholder='Confirm Password'
									name='confirm_password'
									value={formData.confirm_password}
									onChange={handleChange}
								/>
							</Box>
							<Box mt={5} style={{ display: 'flex', justifyContent: 'center' }}>
								<button type='submit' className='btn btn-danger'>
									Sign Up
								</button>
							</Box>
						</form>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Sign;
