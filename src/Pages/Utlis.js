import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
	setAvailableLoan,
	setPosition,
	setSixUser,
} from '../Reducers/UiReducer';

export const FilterUser = async (mainId, dispatch) => {
	try {
		const response = await axios.post(
			'http://localhost:8080/api/v1/user/getsixusers',
			{ id: mainId }
		);
		dispatch(setSixUser(response.data.data));
		console.log('alldata', response.data.data);
		console.log('member', response.data.data.memberId);
		dispatch(setPosition(response.data.data.position));
		console.log('Position', response.data.data[0].position);
	} catch (error) {
		console.log('Error:', error.message);
	}
};

export const createLoan = async (formData) => {
	try {
		const response = await axios.post(
			'http://localhost:8080/api/v1/loan/createloan',
			formData
		);

		const loandata = response.data.data;
		// dispatch(setAvailableLoan(loandata));
		console.log('loandata', loandata);
		return loandata;
	} catch (error) {
		console.log('Error:', error.message);
	}
};

export const getloanDetails = async (mainId, dispatch) => {
	try {
		const response = await axios.post(
			'http://localhost:8080/api/v1/loan/getloan',
			{ id: mainId }
		);
		const loanDetails = response.data.data;
		console.log('response', response.data.data.ewi);
		dispatch(setAvailableLoan(loanDetails));
	} catch (error) {
		console.log('Error:', error.message);
	}
};

export const createEmi = async (formData) => {
	try {
		const response = await axios.post(
			'http://localhost:8080/api/v1/emi/emicreate',
			formData
		);
		// const loanDetails = response.data.data;

		console.log('response', response.data);
		return response.data.data;
		// dispatch(setAvailableLoan(loanDetails));
	} catch (error) {
		console.log('Error:', error.message);
	}
};
