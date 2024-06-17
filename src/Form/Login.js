import { Box, Grid, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Electronic from '../Assets/Image/Electronics.png';
import logo from '../Assets/Image/User.png';
import Loginn from '../Assets/Image/Login.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setLoginData, setEmailData } from '../Reducers/UiReducer';
import { useDispatch } from 'react-redux';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const LoginResult = async () => {
		setLoading(true);
		try {
			const response = await axios.post(
				'http://localhost:8080/api/v1/user/login',
				{
					email,
					password,
				}
			);
			const responseData = response.data;
			const dataSuccess = responseData.success;
			const userData = responseData.user.email;
			const userPass = responseData.user.password;

			console.log('userData', userData);
			sessionStorage.setItem('dataSuccess', dataSuccess);
			dispatch(setLoginData(userData));
			dispatch(setEmailData(userPass));

			navigate('/dashboard');
			console.log(responseData); // Just for checking, you can do something else with responseData
		} catch (error) {
			console.error('Login failed:', error);
		}
		setLoading(false);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	return (
		<>
			<Grid style={{ background: 'grey' }} container>
				<Grid item lg={6} mx='auto'>
					<Grid container>
						<Grid style={{ background: 'black' }} item={12}>
							<Box>
								<Box>
									<h2>Sign in</h2>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Login;
